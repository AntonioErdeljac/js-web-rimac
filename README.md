# js-web-rimac

A web client component for M2M (personal) Rimac project. Serves as frontend along with [js-cpu-rimac](https://github.com/AntonioErdeljac/js-cpu-rimac)

### Cloning the repository

```shell
git clone https://github.com/AntonioErdeljac/js-web-rimac.git
```

### Install packages


```shell
npm i
```

### Available commands

Running commands with npm `npm run [command]`

| command            | description                                                                                                                                                                 |
| :----------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `start`            | Starts a development instance of app                                                                                                                                        |
| `test`             | Runs unit tests in interactive mode                                                                                                                                         |

### Environment variables

Copy content from `.env.example` to `.env`, firebase variables must correspond to API used for [js-cpu-rimac](https://github.com/AntonioErdeljac/js-cpu-rimac)

| variable                         | required                                                                                                                                      |
| :------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| `REACT_APP_FIREBASE_API_KEY`     | true                                                                                                                                          |
| `REACT_APP_FIREBASE_AUTH_DOMAIN`     | true                                                                                                                                          |
| `REACT_APP_FIREBASE_DATABASE_URL`     | true                                                                                                                                          |
| `REACT_APP_FIREBASE_PROJECT_ID`     | true                                                                                                                                          |
| `REACT_APP_FIREBASE_STORAGE_BUCKET`     | true                                                                                                                                          |
| `REACT_APP_FIREBASE_MESSAGING_SENDER_ID`     | true                                                                                                                                          |
| `REACT_APP_FIREBASE_APP_ID`     | true                                                                                                                                          |
| `REACT_APP_FIREBASE_MEASUREMENT_ID`     | true                                                                                                                                          |
