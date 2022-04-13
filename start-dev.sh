#!/usr/bin/env bash

started_at=$(date +"%s")
echo "-----> Provisioning containers"
sudo docker-compose --file docker-compose.yaml up

echo ""
docker exec test-proj-devit_backend-server_1 npm run migrate
echo -e "-----> Provisioning containers"
docker exec test-proj-devit_backend-server_1 npm run seed
echo ""

ended_at=$(date +"%s")
minutes=$(((ended_at - started_at) / 60))
seconds=$(((ended_at - started_at) % 60))

echo "-----> Done in ${minutes}m${seconds}s"
