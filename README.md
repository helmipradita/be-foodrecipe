# Food Recipe - Backend

## Table of Contents

* [About the Project](#about-the-project)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Run Locally](https://github.com/helmipradita/be-foodrecipe/edit/main/README.md#run-locally)
* [Demo](https://github.com/helmipradita/be-foodrecipe/edit/main/README.md#demo)
  *  [x] [API Reference - Users](#api-reference---users)
  *  [ ] [API Reference - Recipes](#api-reference---recipes)
  *  [ ] [API Reference - Like](#api-reference---like)
  *  [ ] [API Reference - Save](#api-reference---save)
  *  [ ] [API Reference - Comment](#api-reference---comment)
* [Related Project](#related-project)
* [Contact](#contact)

## About The Project

Food Recipea website for looking for recipes for delicious meals, there are popular recipes that can be used to find ideas for your everyday dishes. There is a login feature as a member to be able to upload the results of your own cooking recipes and can be seen by all visitors to the food recipe website. After registering and having an account, there is a menu like recipes, save recipes and comments on the recipes you follow so that you can exchange information with each other.

## Run Locally

Clone the project

```bash
  git clone https://github.com/helmipradita/be-foodrecipe
```

Go to the project directory

```bash
  cd be-foodrecipe
```

Install dependencies

```bash
  npm install
```

Setup .env copy from .env.example

```bash
  PORT=
  HOST=
  PG_CONNECT=

  JWT_KEY=
  REFRESH_TOKEN=

  CLOUD_NAME=
  CLOUDINARY_API_KEY=
  CLOUDINARY_API_SECRET=

  MAIL_USERNAME=
  MAIL_PASSWORD=
  OAUTH_CLIENTID=
  OAUTH_CLIENT_SECRET=
  OAUTH_REFRESH_TOKEN=
```

Start the server

```bash
  npm run dev
```

## Demo

API deploy 

```bash
https://api-recipe.helmipradita.dev
```

## API Reference - Users

<details>
<summary>Show</summary>
<br>

#### Register

```
  POST /users/register
```

Field body form

| Field      | Type     | Description                     |
| :--------- | :------- | :------------------------------ |
| `name` | `string` | **Required**. name          |
| `email`    | `string` | **Required**. with format email |
| `phone`    | `string` | **Required**. with format phone |
| `password` | `string` | **Required**. password          |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": {
    "email": "helmi.pradita.a@gmail.com"
  },
  "message": "register success please check your email"
}
```

#### Verification

```
  POST /users/verification
```

Field body form

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `email` | `string` | **Required**. with format email        |
| `otp`   | `string` | **Required**. otp get from inbox email |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": "helmi.pradita.a@gmail.com",
  "message": "verification account success"
}
```

#### Forgot password

```
  POST /users/forgot-password
```

Field body form

| Field   | Type     | Description                     |
| :------ | :------- | :------------------------------ |
| `email` | `string` | **Required**. with format email |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": null,
  "message": "send email success"
}
```

#### Reset password

```
  POST /users/reset-password/:token
```

Field body form

| Field   | Type     | Description                              |
| :------ | :------- | :--------------------------------------- |
| `token` | `string` | **Required**. token get from inbox email |
| `email` | `string` | **Required**. email |
| `password` | `string` | **Required**. password |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": null,
  "message": "change password success"
}
```

#### Login

```
  POST /users/login
```

Field body form

| Field      | Type     | Description                     |
| :--------- | :------- | :------------------------------ |
| `email`    | `string` | **Required**. with format email |
| `password` | `string` | **Required**. password          |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": {
    "id": "34224357-1a26-4e09-8e97-898a4ad66af9",
    "name": "Helmi Pradita",
    "email": "helmi.pradita.a@gmail.com",
    "phone": "085708572498",
    "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1672552579/default_profile.png",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM0MjI0MzU3LTFhMjYtNGUwOS04ZTk3LTg5OGE0YWQ2NmFmOSIsImVtYWlsIjoiaGVsbWkucHJhZGl0YS5hQGdtYWlsLmNvbSIsImlhdCI6MTY3MzUxMDA1MCwiZXhwIjoxNjczNTEzNjUwfQ.POZH45wkR9boEahzlMNZ0f_eZAkhalm1V1ylxrK7yJk",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM0MjI0MzU3LTFhMjYtNGUwOS04ZTk3LTg5OGE0YWQ2NmFmOSIsImVtYWlsIjoiaGVsbWkucHJhZGl0YS5hQGdtYWlsLmNvbSIsImlhdCI6MTY3MzUxMDA1MCwiZXhwIjoxNjczNTk2NDUwfQ.IVuv_NQVh-fWdK3ylx4WVrwa8N4kI2TJlvWorI-_5fU"
  },
  "message": "login success"
}
```

#### Get profile user

```
  GET /users
```

Field auth

| Field    | Type     | Description                             |
| :------- | :------- | :-------------------------------------- |
| `bearer` | `string` | **Required**. token from response login |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": {
    "id": "34224357-1a26-4e09-8e97-898a4ad66af9",
    "name": "Helmi Pradita",
    "email": "helmi.pradita.a@gmail.com",
    "phone": "085708572498",
    "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1672552579/default_profile.png"
  },
  "message": "get data users success"
}
```

#### Edit profile user

```
  PUT /user/profile
```

Field auth

| Field    | Type     | Description                             |
| :------- | :------- | :-------------------------------------- |
| `bearer` | `string` | **Required**. token from response login |

Field body form

| Field      | Type     | Description            |
| :--------- | :------- | :--------------------- |
| `name` | `string` | **Required**. name |
| `email`     | `string` | **Required**. city     |
| `phone`    | `number` | **Required**. phone    |
| `photo`    | `file`   | **Required**. photo    |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": {
    "id": "34224357-1a26-4e09-8e97-898a4ad66af9",
    "name": "Helmi Pradita update",
    "email": "helmi.pradita.a@gmail.com",
    "phone": "085708572498",
    "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1672552579/default_profile.png"
  },
  "message": "update data users success"
}
```

</details>

