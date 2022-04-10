FROM scratch
RUN mkdir -p /rss/app
WORKDIR /home/user/rss
ADD start-dev.sh /rss
CMD start-dev.sh