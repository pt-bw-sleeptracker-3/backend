# backend
For back end developer

WEB Unit 4 Node Build

Grading Rubric: https://www.notion.so/Web-Unit-4-Node-ac50a1d0cf0a4941a1b20cd28a1c03c6

Back-end Development Role Description
You have been learning all about NodeJS and Express and SQL in order to craft Web Servers and build API’s for consumption by client-side applications. You will use these skills to be in charge of building out the back-end API for your project.

The Back End Development unit explored the following topics:
Building RESTful Web APIs with Express and Node.js
Server-side Routing,Express Middleware
Deployment and Good Practices
Introduction to Relational Databases and SQL
Inserting and Modifying Data
Querying Data, Migrations and Seeding
Introduction to Data Modeling
Introduction to Authentication
Using Sessions and Cookies
Using JSON Web Tokens (JWT)
Client Side Authentication
Introduction to Automated Testing
Testing React Applications
Testing Web APIs
Your primary role as a Back-end Architect
You will use your skills to be responsible for the back-end architecture of this project. You will work closely with your Front End Architect and your Scrum Master in order to discover project needs and deliver working Endpoints for your application.

# SleepTracker

### Endpoints

[link]
(https://sleeptracker-hv.herokuapp.com)

| Method | Endpoint                | Description                                                                                                                                                                 |
| ------ | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /api/auth/login              | Logs in user                                                                                                         |
| POST   | /api/auth/register | Creates a new user                                                                   |
| GET    | /api/users              | Returns an array of all the users objects contained in the database                                                                                                        |
| GET    | /api/users/:id          | Returns the users object with the specified id.                                                                                                                              |
| DELETE | /api/users/userdelete/:id          | Removes the user with the specified id |
| PUT    | /api/users/:id         | Updates the users with the specified `id` using data from the `request body`. Returns the modified document, **NOT the original**.                                           |
| POST   | /api/sleepdata/:id | Creates a new sleep data                                                                   |
| GET    | /api/sleepdata            | Returns an array of all the users objects contained in the database                                                                                                        |
| GET    | /api/sleepdata/:id        | Returns the sleep data object with the specified id.                                                                                                                              |
| DELETE | /api/users/sleepdatadelete/:id          | Removes the sleep data with the specified id |
| PUT    | /api/users/sleepdata/:id         | Updates the sleep data with the specified `id` using data from the `request body`. Returns the modified document, **NOT the original**.                                           |
