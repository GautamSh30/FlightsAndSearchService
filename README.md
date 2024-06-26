# Welcome to Flights Service

## Project Setup

- clone project on your local
- Execute `npm install` on same path as of your root directory of the downloaded project
- Create a `.env` file in the root directory and add the following enviorment variable
- `PORT = 3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
   "development": {
    "username": "YOUR _DB_LOGIN_NAME",
    "password": "YOUR_DB_LOGIN_PASSWORD",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}
```

```
- Once you have added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create` and then execute
`npx sequelize db:migrate`

```

## DB Design

- Airplane Table
- Flight
- Airport
- City

- A flight belongs to a plane but one airplane can be used in mutiple flights
- A city has many airports but one airport belongs to a city
- One airport can have many flights, but a flight belongs to one airport

## Tables

### City -> id, name, created_at, updated_at

### Airport -> id, name, address, city_id, created_at, updated_at

Relationship -> city has many airports and airport belong to a city (one to many)

```
npx sequelize model:gen
erate --name Airport --attributes name:String,address:String,cityId:integer
```
