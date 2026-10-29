Relational Database API (Node.js, Express & MySQL)
Welcome to the Relational Database API project! This application is a fully functional RESTful backend built with Node.js, Express, Sequelize ORM, and MySQL. It demonstrates a classic one-to-many database relationship where a single User can create and own multiple Posts. Everything is wired up with complete CRUD (Create, Read, Update, Delete) operations, making it an ideal starter template or learning reference for relational data modeling in JavaScript.

How the Code Works Under the Hood
The architecture of this project is organized using a clean separation of concerns, routing requests through distinct layers from the database up to the server entry point:

server.js: This is the heartbeat of the application. It initializes the Express server, applies necessary middleware (like JSON body parsers), and mounts the API routes so they can listen for incoming traffic on your specified port.

config/ & database/: These folders handle your connection bridge to MySQL. Using Sequelize, the configuration files securely load your database credentials, set up dialects, and establish the connection pool required to talk to your local or hosted database instance.

models/: Here is where the relational logic lives. The User model and Post model define the schema shapes and specify the Sequelize association rules—specifically, that User.hasMany(Post) and Post.belongsTo(User).

migrations/: These files track changes to your database schema over time. Using the Sequelize CLI, migrations allow you to reliably create, alter, or drop tables across different environments without manually writing raw SQL drop/create scripts.

controller/: The controllers contain the core business logic of your application. When a route is triggered, the controller executes the corresponding Sequelize query (such as User.findAll() or Post.create()), handles async/await blocks, catches any database errors, and sends back the appropriate JSON response.

routes/: This directory acts as the traffic controller. It defines the endpoint paths (like /api/users or /api/posts) and maps HTTP methods (GET, POST, PUT, DELETE) directly to their matching controller functions.

Setting Up and Running Your Code Locally
Getting this project up and running on your local machine is straightforward if you follow these sequential steps:

Clone the Repository: Make sure you have downloaded or cloned your project files into your local development directory.

Install Dependencies: Open your terminal inside the project root folder and run npm install to download all necessary packages like Express, Sequelize, and MySQL2.

Configure Your Database: Ensure your MySQL server is actively running. Open your configuration files in the config/ directory and update the database name, username, and password fields to match your local MySQL setup.

Run Database Migrations: To push your schemas and relationships to MySQL, execute npx sequelize-cli db:migrate in your terminal. This will automatically generate your user and post tables with the proper foreign key constraints.

Start the Server:

For active development with automatic server reloads, run npm run dev (powered by Nodemon).

For standard production runs, execute npm start.

Once running, your server will fire up and listen for requests on your chosen port, ready to interact with any REST client like Postman, Thunder Client, or your frontend application.

Using the API Endpoints
The API is split into two primary resources: Users and Posts. Because of the relational setup, fetching records will often include joined data (such as seeing all posts written by a specific user).

Working with Users
Get All Users (GET /api/users): Sends a GET request to retrieve a list of every user registered in the database, complete with their associated posts nested inside the response.

Get a Single User (GET /api/users/:id): Replaces :id with a specific user's numeric ID to fetch their individual profile and posts.

Create a User (POST /api/users): Sends a JSON body containing user details—such as { "name": "Jane Doe", "email": "jane@example.com" }—to register a brand new user.

Update a User (PUT /api/users/:id): Targets a specific user ID with a JSON body containing the fields you wish to modify (like { "name": "Jane Smith" }).

Delete a User (DELETE /api/users/:id): Permanently removes the user associated with that ID from the database.

Working with Posts
Get All Posts (GET /api/posts): Retrieves every post across all users, automatically including the author's details through the Sequelize association.

Get a Single Post (GET /api/posts/:id): Fetches a specific post by its ID along with the information of the user who authored it.

Create a Post (POST /api/posts): Sends a JSON body containing post information along with a valid user ID—for instance, { "title": "My First Blog", "content": "Learning Node and Sequelize is awesome!", "userId": 1 }—to create and link the post to that user.

Update a Post (PUT /api/posts/:id): Sends modified title or content fields to update an existing post by its ID.

Delete a Post (DELETE /api/posts/:id): Removes a specific post record from the database.
