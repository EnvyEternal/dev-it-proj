# RSS NEWS
## Start
For start project you must located in directory project
######
Comand for start:

```bash
1. RUN CONTAINER
docker-compose up

  !Open new terminal and use migration and seed 

2. RUN MIGRATION
docker-compose exec server npm run migrate

3. RUN SEED
docker-compose exec server npm run seed

  !If you get an error when creating a container, 
  you need to use -> sudo <comand>
```


## Usage

```
!Wait 5 minutes for load news 

Open browser and go to http://localhost:3000/
You have standart admin data: 
Login: Admin
Password: Admin

If you changed the admin data, then use yours

For change standart admin data you must go to: 
/src/server/constants/index.js 
And change login or password on yours
```

## For local start

```
If you want start project local you must have a database, like Postgresql
For start poject you need:

!Node v14.18.1

Opne your terminal and enter next comands:
   1. You need to start server:
    Open terminal and enter:
        - cd ./src/server
        - npm install
        - cd ./db (For next comant you need database like Posgresql)
        - npx sequelize db:create
        - npm run migrate
        - npm run seed
    And
        - npm run start
   2. For start client you need:
    Open new terminal and enter:
        - cd ./src/client
        - npm install
        - npm run start
    3. Wait 5 minutes for the news to load and enjoy
```