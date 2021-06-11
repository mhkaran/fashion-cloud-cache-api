#!/bin/sh


if [ $1 == "test" ]
then
   npm run test
elif [ $1 == "start" ]
then
   if [ -n "$(docker images -q fashion-cloud-cache-api_FC-cache:latest)" ]
   then
      docker rmi --force fashion-cloud-cache-api_FC-cache
   fi
   docker-compose up
elif [ $1 == "dev" ]
then
   export MONGO_URI=mongodb://localhost:27017/?readPreference=primary 
   npm run dev
else
    echo "try again with proper param (test, dev, start)"
fi