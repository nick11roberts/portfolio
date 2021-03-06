#!/bin/bash

source ~/portfolio/docker.env
dvm use
docker rm -fv portfolio
docker build -t portfolio:latest .
docker run --name portfolio --detach -p 80:9000 portfolio
