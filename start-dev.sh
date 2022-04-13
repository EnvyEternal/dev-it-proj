#!/usr/bin/env bash

started_at=$(date +"%s")
echo "-----> Provisioning containers"
sudo docker-compose --file docker-compose.yaml up
echo ""

echo -e "-----> Provisioning containers"
docker exec test-proj-devit_backend-server_1 bash  -c "cd ./db; npx sequelize db:migrate; npx sequelize db:seed:all"
echo ""

ended_at=$(date +"%s")
minutes=$(((ended_at - started_at) / 60))
seconds=$(((ended_at - started_at) % 60))

echo "-----> Done in ${minutes}m${seconds}s"
