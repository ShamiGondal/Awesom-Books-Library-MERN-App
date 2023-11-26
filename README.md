
## Awesom Book Library

Welcome to the Awesom Books Library System, a full-stack web application for managing the Books. This project includes a backend API developed with Node.js and Express.js, hosted on Railway, and a frontend application hosted on Netlify. The project is a collaborative effort by Ahmad Naeem and Ehtisham Ahmed Gondal.


## API Reference

#### Get all Books

```http
  GET /api/books/fetchBooks
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get Book

```http
  GET /api/books/fetchBook/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Add Add Books

```http
  GET /api/books/addBook
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Add like

```http
  GET /api/rooms/likes/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Add comments

```http
  GET /api/rooms/comments/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |



#### Delete Book

```http
  GET /api/books/deleteBook/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |



## Live 

https://awesom-books-library.netlify.app/

## API 

https://awe-book-library-server-side-production.up.railway.app/
## Deployment

To deploy this project run go to Server Directory

```bash
  nodemon .\app.js
```

## HMS Tour Video

[![Tour Video 2](https://img.youtube.com/vi/XZ_DIUoJN04/0.jpg)](https://youtu.be/XZ_DIUoJN04)

## Roadmap

- Node js, Express js
- JavaScript Vanilla ES6
- MongoDB Atlas


## Environment Variables

The App will work fine but if you want to add new end point so you need key to connect to mongodb Atlas, you will need to add the following environment variables to your .env file this file should be in server folder

`API_KEY`

`*************************************************`





## Authors

- [@Ehtisham Ahmed Gondal](https://github.com/ShamiGondal)
- [@Ahmad Naeem](https://github.com/ahmadnaeem313)

