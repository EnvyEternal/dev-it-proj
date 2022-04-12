#!/usr/bin/env bash

started_at=$(date +"%s")
echo "-----> Provisioning containers"
docker-compose --file docker-compose up
echo ""

echo "-----> Provisioning containers"
<<<<<<< HEAD
sudo docker-compose --file docker-compose.yaml up
echo ""

=======
docker exec -it test-proj-devit_server npm i bcrypt
echo ""

echo "-----> Running application migrations"
docker exec -it test-proj-devit_server sequelize db:migrate
echo ""

echo "-----> Running application seeds"
docker exec -it test-proj-devit_server sequelize db:seed:all
echo "<----- Seeds created"

ended_at=$(date +"%s")

>>>>>>> 724c177de1b85ace18c14146d510dde4e594f803
minutes=$(((ended_at - started_at) / 60))
seconds=$(((ended_at - started_at) % 60))

echo "-----> Done in ${minutes}m${seconds}s"
arm64v8/node