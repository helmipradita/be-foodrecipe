<br />
<p align="center">

  <h3 align="center">Food Recipe</h3>
  <p align="center">
    <image align="center" width="200" src='https://res.cloudinary.com/dnu5su7ft/image/upload/v1674602322/Group_697_i0votd.png' />
  </p>

  <p align="center">
    <br />
    <a href="https://github.com/helmipradita/be-foodrecipe"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://api-recipe.helmipradita.dev">View Demo</a>
  </p>
</p>




# Food Recipe - Backend

## Table of Contents

* [About the Project](#about-the-project)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Run Locally](https://github.com/helmipradita/be-foodrecipe/edit/main/README.md#run-locally)
* [Demo](https://github.com/helmipradita/be-foodrecipe/edit/main/README.md#demo)
  *  [x] [API Reference - Users](#api-reference---users)
  *  [x] [API Reference - Recipes](#api-reference---recipes)
  *  [x] [API Reference - Like](#api-reference---like)
  *  [x] [API Reference - Save](#api-reference---save)
  *  [x] [API Reference - Comment](#api-reference---comment)
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

## API Reference - recipes

<details>
<summary>Show</summary>
<br>

#### get all recipes

```
  GET /recipes/all
```

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [
    {
      "id": "825057b5-7f1a-495e-86a0-329e2e9ee94e",
      "title": "Nasi Goreng",
      "ingredients": "Nasi putih, Bawang putih, Minyak Goreng, Penyedap rasa",
      "photo": "http://res.cloudinary.com/dnu5su7ft/image/upload/v1673501227/foodrecipe/gxucm71tmnpsedjlhgcc.jpg",
      "videos": "youtube.com",
      "user_id": "3d3c5f0c-1733-491a-baa6-c5990d1b2eb2",
      "author": "Helmi Pradita pradita",
      "created_at": "tuesday  , 10 January   2023",
      "updated_at": "thursday , 12 January   2023"
    },
    {
      "id": "f3b5229f-2caa-45cd-aa8b-77ade69a7e46",
      "title": "Soto ayam",
      "ingredients": "Bumbu soto instant, ayam goreng di suwir kecil kecil, telur rebus",
      "photo": "http://res.cloudinary.com/dnu5su7ft/image/upload/v1673501269/foodrecipe/u6bi7xhbt7xixhethfcw.jpg",
      "videos": "youtube.com",
      "user_id": "3d3c5f0c-1733-491a-baa6-c5990d1b2eb2",
      "author": "Helmi Pradita pradita",
      "created_at": "tuesday  , 10 January   2023",
      "updated_at": "thursday , 12 January   2023"
    },
    {
      "id": "978dcc2b-f787-44d2-bce8-dd9b6e9ff4d4",
      "title": "Kare ayam",
      "ingredients": "Bumbu kare ayam, minyak goreng, ayam rebus",
      "photo": "http://res.cloudinary.com/dnu5su7ft/image/upload/v1673501316/foodrecipe/kb7awormojvfoasggepx.png",
      "videos": "youtube.com",
      "user_id": "3d3c5f0c-1733-491a-baa6-c5990d1b2eb2",
      "author": "Helmi Pradita pradita",
      "created_at": "tuesday  , 10 January   2023",
      "updated_at": "thursday , 12 January   2023"
    },
    {
      "id": "c79762f0-4dfb-46f3-bd3b-17c62f9ccfb1",
      "title": "Salad ",
      "ingredients": "Tomat, buncis, kentag bawang putih\r\nGula, Garam",
      "photo": "http://res.cloudinary.com/dnu5su7ft/image/upload/v1673501163/foodrecipe/vzdh9u3mixqpoozef08u.png",
      "videos": "youtube.com",
      "user_id": "3d3c5f0c-1733-491a-baa6-c5990d1b2eb2",
      "author": "Helmi Pradita pradita",
      "created_at": "wednesday, 11 January   2023",
      "updated_at": "thursday , 12 January   2023"
    }
  ],
  "message": "get recipes success",
  "pagination": {
    "currentPage": 1,
    "limit": 4,
    "totalData": 9,
    "totalPage": 3
  }
}
```

#### Add recipes

```
  POST /recipes
```

Field auth

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `bearer` | `string` | **Required**. token from response login        |

Field body form

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `title` | `string` | **Required**. title        |
| `ingredients`   | `string` | **Required**. ingredients |
| `videos`   | `string` | **Required**. videos |
| `photo`   | `string` | **Required**. photo |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": {
    "id": "dddfe2ee-3688-4e68-b73f-32bf66661732",
    "title": "Insert baru 7",
    "ingredients": "Tepung terigu",
    "videos": "youtube.com",
    "user_id": "34224357-1a26-4e09-8e97-898a4ad66af9",
    "photo": "http://res.cloudinary.com/dnu5su7ft/image/upload/v1673915955/foodrecipe/rt9fe46qkeqffqebxc0c.jpg"
  },
  "message": "insert recipe success"
}
```

#### Get my recipes

```
  GET /recipes
```
Field auth

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `bearer` | `string` | **Required**. token from response login        |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [
    {
      "id": "dddfe2ee-3688-4e68-b73f-32bf66661732",
      "title": "Insert baru 7",
      "ingredients": "Tepung terigu",
      "photo": "http://res.cloudinary.com/dnu5su7ft/image/upload/v1673915955/foodrecipe/rt9fe46qkeqffqebxc0c.jpg",
      "videos": "youtube.com",
      "user_id": "34224357-1a26-4e09-8e97-898a4ad66af9",
      "author": "Helmi Pradita update",
      "created_at": "tuesday  , 17 January   2023",
      "updated_at": "tuesday  , 17 January   2023"
    }
  ],
  "message": "get data recipes success"
}
```

#### Detail recipes by id

```
  GET /recipes/dddfe2ee-3688-4e68-b73f-32bf66661732
```
Field auth

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `bearer` | `string` | **Required**. token from response login        |


Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": {
    "id": "c79762f0-4dfb-46f3-bd3b-17c62f9ccfb1",
    "title": "Salad ",
    "ingredients": "Tomat, buncis, kentag bawang putih\r\nGula, Garam",
    "photo": "http://res.cloudinary.com/dnu5su7ft/image/upload/v1673501163/foodrecipe/vzdh9u3mixqpoozef08u.png",
    "videos": "youtube.com",
    "user_id": "3d3c5f0c-1733-491a-baa6-c5990d1b2eb2",
    "author": "Helmi Pradita pradita",
    "created_at": "wednesday, 11 January   2023",
    "updated_at": "thursday , 12 January   2023"
  },
  "message": "get data recipes success"
}
```

#### Edit recipes

```
  PUT /recipes/dddfe2ee-3688-4e68-b73f-32bf66661732
```

Field auth

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `bearer` | `string` | **Required**. token from response login        |

Field body form

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `title` | `string` | **Required**. title        |
| `ingredients`   | `string` | **Required**. ingredients |
| `videos`   | `string` | **Required**. videos |
| `photo`   | `string` | **Required**. photo |

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
    "id": "dddfe2ee-3688-4e68-b73f-32bf66661732",
    "title": "Insert baru 1 update1",
    "ingredients": "Tepung update",
    "videos": "youtube.com update",
    "photo": "http://res.cloudinary.com/dnu5su7ft/image/upload/v1673916081/foodrecipe/fyoqygiqegyye7t6stce.jpg"
  },
  "message": "Edit recipe success"
}
```

#### Delete recipes

```
  DELETE /recipes/0a93d647-4318-4c7f-bc00-08549aac80ba
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
  "message": "delete recipe success"
}
```

</details>

## API Reference - Like

<details>
<summary>Show</summary>
<br>

#### Add like

```
  POST /like/f3b5229f-2caa-45cd-aa8b-77ade69a7e46
```
Field auth

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `bearer` | `string` | **Required**. token from response login        |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": {
    "id": "63be9a64-2ead-4367-9312-26db85cd0cc9",
    "recipe_id": "f3b5229f-2caa-45cd-aa8b-77ade69a7e46",
    "user_id": "34224357-1a26-4e09-8e97-898a4ad66af9"
  },
  "message": "insert like recipe success"
}
```

#### Get my like

```
  GET /like
```

Field auth

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `bearer` | `string` | **Required**. token from response login        |


Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [
    {
      "id": "63be9a64-2ead-4367-9312-26db85cd0cc9",
      "recipe_id": "f3b5229f-2caa-45cd-aa8b-77ade69a7e46",
      "recipes_name": "Soto ayam",
      "user_id": "34224357-1a26-4e09-8e97-898a4ad66af9",
      "photo": "http://res.cloudinary.com/dnu5su7ft/image/upload/v1673501269/foodrecipe/u6bi7xhbt7xixhethfcw.jpg",
      "created_at": "tuesday  , 17 January   2023",
      "updated_at": "tuesday  , 17 January   2023"
    }
  ],
  "message": "get data like success"
}
```

#### Delete my like

```
  DELETE /like/63be9a64-2ead-4367-9312-26db85cd0cc9
```
Field auth

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `bearer` | `string` | **Required**. token from response login        |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "message": "delete like success"
}a
```

</details>

## API Reference - Like

<details>
<summary>Show</summary>
<br>

#### Add save

```
  POST /save/bd6406cc-e48c-47d3-b670-5e9db42ea9df
```
Field auth

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `bearer` | `string` | **Required**. token from response login        |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": {
    "id": "61088b3b-9e7d-4d89-b3ad-d0d7b2dc8369",
    "recipe_id": "bd6406cc-e48c-47d3-b670-5e9db42ea9df",
    "user_id": "34224357-1a26-4e09-8e97-898a4ad66af9"
  },
  "message": "insert like recipe success"
}
```

#### Get my save

```
  GET /save
```

Field auth

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `bearer` | `string` | **Required**. token from response login        |


Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [
    {
      "id": "61088b3b-9e7d-4d89-b3ad-d0d7b2dc8369",
      "recipe_id": "bd6406cc-e48c-47d3-b670-5e9db42ea9df",
      "recipes_name": "Nasi pecel",
      "user_id": "34224357-1a26-4e09-8e97-898a4ad66af9",
      "photo": "http://res.cloudinary.com/dnu5su7ft/image/upload/v1673501377/foodrecipe/y5ie2mwg6rtjdjpcrxbg.jpg",
      "created_at": "tuesday  , 17 January   2023",
      "updated_at": "tuesday  , 17 January   2023"
    }
  ],
  "message": "get data save success"
}
```

#### Delete my save

```
  DELETE /save/61088b3b-9e7d-4d89-b3ad-d0d7b2dc8369
```
Field auth

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `bearer` | `string` | **Required**. token from response login        |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "message": "delete save success"
}a
```

</details>

## API Reference - Comment

<details>
<summary>Show</summary>
<br>

#### Add comment

```
  POST /comment/bd6406cc-e48c-47d3-b670-5e9db42ea9df
```
Field auth

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `bearer` | `string` | **Required**. token from response login        |

Field body form

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `comment` | `string` | **Required**. comment about recipes        |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": {
    "id": "c5bf94c8-e0c8-4dd8-9e5c-63ae5f778bcd",
    "comment": "Resepnya mudah",
    "recipe_id": "bd6406cc-e48c-47d3-b670-5e9db42ea9df",
    "user_id": "34224357-1a26-4e09-8e97-898a4ad66af9"
  },
  "message": "insert comment success"
}
```

#### Get my comment

```
  GET /comment
```

Field auth

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `bearer` | `string` | **Required**. token from response login        |


Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [
    {
      "id": "c5bf94c8-e0c8-4dd8-9e5c-63ae5f778bcd",
      "comment": "Resepnya mudah",
      "recipes_id": "bd6406cc-e48c-47d3-b670-5e9db42ea9df",
      "recipes_name": "Nasi pecel",
      "user_id": "34224357-1a26-4e09-8e97-898a4ad66af9",
      "created_at": "tuesday  , 17 January   2023",
      "updated_at": "tuesday  , 17 January   2023"
    }
  ],
  "message": "get data comment success"
}
```

#### Get comment by id

```
  GET /comment/bd6406cc-e48c-47d3-b670-5e9db42ea9df
```

Field auth

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `bearer` | `string` | **Required**. token from response login        |


Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [
    {
      "id": "c5bf94c8-e0c8-4dd8-9e5c-63ae5f778bcd",
      "comment": "Resepnya mudah",
      "recipe_id": "bd6406cc-e48c-47d3-b670-5e9db42ea9df",
      "user_id": "34224357-1a26-4e09-8e97-898a4ad66af9",
      "name": "Helmi Pradita update",
      "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1672552579/default_profile.png",
      "created_at": "tuesday  , 17 January   2023",
      "updated_at": "tuesday  , 17 January   2023"
    },
    {
      "id": "99b37d5e-a29f-495b-9955-a600a5b2de23",
      "comment": "Nasi enak pecelnya enak",
      "recipe_id": "bd6406cc-e48c-47d3-b670-5e9db42ea9df",
      "user_id": "b9eca4dd-0ba1-4dfa-9a18-b10d99024083",
      "name": "Helmi Pradita",
      "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1672552579/default_profile.png",
      "created_at": "friday   , 13 January   2023",
      "updated_at": "friday   , 13 January   2023"
    },
    {
      "id": "c6ed4574-47fe-42a5-babd-a1b94f7caf7b",
      "comment": "test",
      "recipe_id": "bd6406cc-e48c-47d3-b670-5e9db42ea9df",
      "user_id": "3d3c5f0c-1733-491a-baa6-c5990d1b2eb2",
      "name": "Helmi Pradita pradita",
      "photo": "http://res.cloudinary.com/dnu5su7ft/image/upload/v1673323912/foodrecipe/grpcw52ozoszvwy3gere.jpg",
      "created_at": "wednesday, 11 January   2023",
      "updated_at": "wednesday, 11 January   2023"
    },
    {
      "id": "089c14d6-c216-40c7-bffa-36d62cdd0e44",
      "comment": "Enak banget update",
      "recipe_id": "bd6406cc-e48c-47d3-b670-5e9db42ea9df",
      "user_id": "3d3c5f0c-1733-491a-baa6-c5990d1b2eb2",
      "name": "Helmi Pradita pradita",
      "photo": "http://res.cloudinary.com/dnu5su7ft/image/upload/v1673323912/foodrecipe/grpcw52ozoszvwy3gere.jpg",
      "created_at": "tuesday  , 10 January   2023",
      "updated_at": "tuesday  , 10 January   2023"
    },
    {
      "id": "967b0909-4216-4db3-854b-b6bb7df1ae17",
      "comment": "Resepnya mudah di tirukan rasanya enak",
      "recipe_id": "bd6406cc-e48c-47d3-b670-5e9db42ea9df",
      "user_id": "3d3c5f0c-1733-491a-baa6-c5990d1b2eb2",
      "name": "Helmi Pradita pradita",
      "photo": "http://res.cloudinary.com/dnu5su7ft/image/upload/v1673323912/foodrecipe/grpcw52ozoszvwy3gere.jpg",
      "created_at": "tuesday  , 10 January   2023",
      "updated_at": "tuesday  , 10 January   2023"
    },
    {
      "id": "2a491aac-2910-49ab-9e78-b0c7edd11da1",
      "comment": "Rasanya enak",
      "recipe_id": "bd6406cc-e48c-47d3-b670-5e9db42ea9df",
      "user_id": "3d3c5f0c-1733-491a-baa6-c5990d1b2eb2",
      "name": "Helmi Pradita pradita",
      "photo": "http://res.cloudinary.com/dnu5su7ft/image/upload/v1673323912/foodrecipe/grpcw52ozoszvwy3gere.jpg",
      "created_at": "tuesday  , 10 January   2023",
      "updated_at": "tuesday  , 10 January   2023"
    },
    {
      "id": "07d34099-2506-4f5c-b519-d6f0cbd92712",
      "comment": "Resepnya mudah di praktekkan",
      "recipe_id": "bd6406cc-e48c-47d3-b670-5e9db42ea9df",
      "user_id": "3d3c5f0c-1733-491a-baa6-c5990d1b2eb2",
      "name": "Helmi Pradita pradita",
      "photo": "http://res.cloudinary.com/dnu5su7ft/image/upload/v1673323912/foodrecipe/grpcw52ozoszvwy3gere.jpg",
      "created_at": "tuesday  , 10 January   2023",
      "updated_at": "tuesday  , 10 January   2023"
    }
  ],
  "message": "get data comment success"
}
```
#### Edit comment

```
  PUT /comment/089c14d6-c216-40c7-bffa-36d62cdd0e44
```

Field auth

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `bearer` | `string` | **Required**. token from response login        |

Field body form

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `comment` | `string` | **Required**. comment about recipes        |


Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": {
    "id": "089c14d6-c216-40c7-bffa-36d62cdd0e44",
    "comment": "Enak banget update",
    "recipe_id": "bd6406cc-e48c-47d3-b670-5e9db42ea9df",
    "user_id": "34224357-1a26-4e09-8e97-898a4ad66af9"
  },
  "message": "edit data comment success"
}
```

#### Delete my comment

```
  DELETE /comment/06577b2b-be01-42b8-99ba-e39c2effa255
```
Field auth

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `bearer` | `string` | **Required**. token from response login        |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "message": "delete comment success"
}a
```

</details>

## Related Project
* [`Backend Project Recipe `](https://github.com/helmipradita/be-foodrecipe)
* [`REST API Recipe`](https://api-recipe.helmipradita.dev)

## Contact

Contributors names and contact info Fullstack Developers

* Helmi Pradita [@helmipradita](https://github.com/helmipradita)
