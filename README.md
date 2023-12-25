<h1 align='center'>Tasks Todo API</h1>

### **API Features and Endpoints:**

#### **Task Management:**

- `GET /tasks/getAll`: Retrieve a list of tasks
- `POST /tasks/createTask`: Create a new task with title and description. You can choose if the task is important.
- `PUT /tasks/updateTask/:id`: Update an existing task.
- `DELETE /tasks/deleteOne/:id`: Remove a task from the user's list.

### **Server Configuration:**

- Server built with `express.js`, running on port 3000.
- Database connections managed with `mongoose`, connecting to a MongoDB instance.

### **Database Interaction:**

- MongoDB is utilized for storing task data.
- Database connection and error handling are set up to ensure stable operations.

# Get Started

- Clone the repository with `git clone https://github.com/mayerprog/task-todo-api`
- Install dependencies `yarn install`
- Run `yarn start` to run the project on Expo Go app

## Tecnologies

- Express.js
- Mongoose

## Contacts

<p>Mayra Tulegenova</p>

- Telegram: [mayerprog](https://t.me/mayerprog)
- Email: [supermayerehs@gmail.com](supermayerehs@gmail.com)
