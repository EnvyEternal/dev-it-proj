# RSS NEWS
## Start
For start project you must located in directory project
######
Comand for start:

```bash
docker-compose --file docker-compose.yaml up

docker exec test-proj-devit_backend-server_1 bash  -c "cd ./db; npx sequelize db:migrate; npx sequelize db:seed:all"
```


## Usage

```
Open browser and go to http://localhost:3000/
You have standart admin data: 
Login: Admin
Password: Admin
```