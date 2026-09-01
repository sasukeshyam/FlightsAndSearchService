# Welcome to Flight Service

## Project setup 
 - clone the project on our local
 - Ececute `npm install` on the same path as of your root directory of the download project
 - Create a `.env` file on the root directory and add the following environment variable
   - `PORT=3000`
 - Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

 ```
 {
  "development": {
    "username": "YOUR_DB_LOGIN_NAME",
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
 ```

 - Once you'have added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
 and then execute

 `npm sequelize db:migrate`

 ```


## DB Design
 - Airplan Table
 - Flight
 - Airport
 - City

 - A flight belong to an airplane but one airplane can be used in multiple

Flights
 - A city has many airports but one airport belong to a city
 - one airport can have many flight, but a flight belong to one airport


 ## Tables

 ### City -> id, name, created_at, updated_at
 ### Airport -> id, name, address, city_id, created_at, updated_at
     Relationship -> City has many Airport and Airport belong to a city (one to many)