# RSS NEWS
## Start
For start project you must located in directory project
######
Comand for start:

```bash
RUN CONTAINER
sudo docker-compose up

RUN MIGRATION
docker exec server npm run migrate

RUN SEED
docker exec server npm run seed

```


## Usage

```
Open browser and go to http://localhost:3000/
You have standart admin data: 
Login: Admin
Password: Admin
```