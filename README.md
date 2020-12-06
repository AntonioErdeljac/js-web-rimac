# js-web-rimac

A **Progressive Web App** which serves as a client component for M2M (personal) Rimac project. Goes along with [js-cpu-rimac](https://github.com/AntonioErdeljac/js-cpu-rimac)

### CI / CD
[![Netlify Status](https://api.netlify.com/api/v1/badges/4f615b92-82ed-451d-8939-9f86d3f8c0f5/deploy-status)](https://app.netlify.com/sites/quizzical-cray-6ae2e4/deploys)
![Node.js CI](https://github.com/AntonioErdeljac/js-web-rimac/workflows/Node.js%20CI/badge.svg)

[Live version](https://quizzical-cray-6ae2e4.netlify.app/)

### Lint
[![eslint: airbnb](https://img.shields.io/badge/Eslint-Airbnb-red?logo=airbnb&style=flat)](https://github.com/airbnb/javascript)
[![commitlint: conventional](https://img.shields.io/badge/Commitlint-Conventional-red?logo=commitlint&style=flat)](https://github.com/conventional-changelog/commitlint)
[![code style: prettier](https://img.shields.io/badge/Code%20Style-Prettier-red?logo=prettier&style=flat)](https://github.com/prettier/prettier)
[![stylelint: scss](https://img.shields.io/badge/Stylelint-SCSS-red?logo=stylelint&style=flat)](https://github.com/bjankord/stylelint-config-sass-guidelines#readme)

### Test
[![testing: Jest](https://img.shields.io/badge/Tests-Jest-red?logo=jest&style=flat)](https://github.com/facebook/jest)
[![testing: Enzyme](https://img.shields.io/badge/Tests-Enzyme-red?logo=enzyme&style=flat)](https://github.com/enzymejs/enzyme)




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

| variable                                     | required                           |
| :------------------------------------------- | :----------------------------------|
| `REACT_APP_FIREBASE_API_KEY`                 | true                               |
| `REACT_APP_FIREBASE_AUTH_DOMAIN`             | true                               |
| `REACT_APP_FIREBASE_DATABASE_URL`            | true                               |
| `REACT_APP_FIREBASE_PROJECT_ID`              | true                               |
| `REACT_APP_FIREBASE_STORAGE_BUCKET`          | true                               |
| `REACT_APP_FIREBASE_MESSAGING_SENDER_ID`     | true                               |
| `REACT_APP_FIREBASE_APP_ID`                  | true                               |
| `REACT_APP_FIREBASE_MEASUREMENT_ID`          | true                               |
