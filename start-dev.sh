#!/usr/bin/env bash

started_at=$(date +"%s")
echo "-----> Provisioning containers"
docker-compose --file docker-compose up
echo ""

echo "-----> Provisioning containers"
docker exec -it test-proj-devit_server npm i bcrypt
echo ""

echo "-----> Running application migrations"
docker exec -it test-proj-devit_server sequelize db:migrate
echo ""

echo "-----> Running application seeds"
docker exec -it test-proj-devit_server sequelize db:seed:all
echo "<----- Seeds created"

ended_at=$(date +"%s")

minutes=$(((ended_at - started_at) / 60))
seconds=$(((ended_at - started_at) % 60))

echo "-----> Done in ${minutes}m${seconds}s"