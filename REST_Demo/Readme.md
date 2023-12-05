
# Comments App
* This is a comments app built using Node.js and Express. It allows users to view, add, edit, and delete comments.
## Setup
* Install Dependencies: Run npm install to install the necessary dependencies.
* Run the Server: Execute node app.js or npm start to start the server. The app will run on port 3000.
## Routes
### List All Comments
* Route: GET /comments
* Description: Displays a list of all comments.
* Usage: Access this route to view all existing comments.
### Create a New Comment
* Route: POST /comments
* Description: Creates a new comment.
* Usage: Send a POST request to /comments with the username and comment data in the request body to create a new comment.
### Get One Comment
* Route: GET /comments/:id
* Description: Displays details about a specific comment using its ID.
* Usage: Access this route with the comment ID to view the details of that particular comment.
### Update One Comment
* Route: PATCH /comments/:id
* Description: Updates the content of a specific comment.
* Usage: Send a PATCH request to /comments/:id with the updated comment data in the request body to modify a comment.
### Delete One Comment
* Route: DELETE /comments/:id
* Description: Deletes a specific comment by its ID.
* Usage: Send a DELETE request to /comments/:id to remove a comment.

