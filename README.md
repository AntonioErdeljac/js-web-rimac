# js-web-rimac

A web client component for M2M (personal) Rimac project. Serves as frontend along with js-cpu-rimac

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

### Environment variables

Copy content from `.env.example` to `.env`

| variable           | description                              | required                                                                                                                         |
| :----------------- | :--------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `FIREBASE_API`     | URL to firebase realtime database, must match url from js-cpu-rimac        | true                                                                                                                             |
