
# Farm Stand App

## Description
* This Farm Stand App is built using Express.js and MongoDB, providing a platform to manage various farm products.

## Installation
* Clone this repository.
* Install the necessary dependencies using `npm install`.
* Make sure you have MongoDB installed and running locally.

## Usage
* Run the app using `node app.js` or `npm start`.
* Access the application through a browser at `http://localhost:3000`.

## Dependencies
- [Express](https://expressjs.com/)
- [Path](https://nodejs.org/api/path.html)
- [Mongoose](https://mongoosejs.com/)
- [Method-Override](https://github.com/expressjs/method-override)

## Database Connection
This app connects to a MongoDB database named `farmStand`.

## Routes
- `GET /products`: Fetches all products or by category.
- `GET /products/new`: Renders a form to add new products.
- `POST /products`: Adds a new product.
- `GET /products/:id`: Fetches a specific product by ID.
- `GET /products/:id/edit`: Renders a form to edit a specific product.
- `PUT /products/:id`: Updates a product by ID.
- `DELETE /products/:id`: Deletes a product by ID.

## Notes
* The app uses EJS templates located in the `views` directory.
* It employs Express middleware for handling form submissions and HTTP methods.

## Usage Instructions
* Install dependencies.
* Ensure MongoDB is running locally.
* Run the app.
* Access the provided routes to interact with the farm products.

Feel free to explore and modify the app as needed!

