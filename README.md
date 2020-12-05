# js-web-rimac

A web client component for M2M (personal) Rimac project. Serves as frontend along with [js-cpu-rimac](https://github.com/AntonioErdeljac/js-cpu-rimac)

[Live version](https://quizzical-cray-6ae2e4.netlify.app/)

---
[![Netlify Status](https://api.netlify.com/api/v1/badges/4f615b92-82ed-451d-8939-9f86d3f8c0f5/deploy-status)](https://app.netlify.com/sites/quizzical-cray-6ae2e4/deploys)
![Node.js CI](https://github.com/AntonioErdeljac/js-web-rimac/workflows/Node.js%20CI/badge.svg)
[![eslint: airbnb](https://badgen.net/badge/eslint/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)
[![commitlint: conventional](https://badgen.net/badge/commitlint/conventional/cyan)](https://github.com/conventional-changelog/commitlint)
[![code style: prettier](https://badgen.net/badge/code%20style/prettier/blue)](https://github.com/prettier/prettier)




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

| command            | description                                                                                                 |
| :----------------- | :---------------------------------------------------------------------------------------------------------- |
| `start`            | Starts a development instance of the app                                                                    |
| `build`            | Builds production instance of the app                                                                       |
| `eject`            | Ejects app from react-scripts (**Resort to react-app-rewired rather than doing this**)                      |
| `test`             | Runs unit tests in interactive mode                                                                         |
| `test:ci`          | Runs unit tests                                                                                             |
| `lint`             | Lints all relevant project files                                                                            |
| `lint:fix`         | Lints all relevant project files and fixes as much as automatically possible                                |

### Environment variables

Copy content from `.env.example` to `.env`, firebase variables must correspond to API used for [js-cpu-rimac](https://github.com/AntonioErdeljac/js-cpu-rimac)

| variable                           | required                                                                                                                                      |
| :--------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| `REACT_APP_FIREBASE_API_KEY`       | true                                                                                                                                          |
| `REACT_APP_FIREBASE_AUTH_DOMAIN`   | true                                                                                                                                          |
| `REACT_APP_FIREBASE_DATABASE_URL`     | true                                                                                                                                          |
| `REACT_APP_FIREBASE_PROJECT_ID`     | true                                                                                                                                          |
| `REACT_APP_FIREBASE_STORAGE_BUCKET`     | true                                                                                                                                          |
| `REACT_APP_FIREBASE_MESSAGING_SENDER_ID`     | true                                                                                                                                          |
| `REACT_APP_FIREBASE_APP_ID`     | true                                                                                                                                          |
| `REACT_APP_FIREBASE_MEASUREMENT_ID`     | true                                                                                                                                          |
