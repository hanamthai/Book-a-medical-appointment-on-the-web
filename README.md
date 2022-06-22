Explain:
SERN (SQL, Express.js, React.js, Node.js)
MERN (MongoDB, Express.js, React.js, Node.js)
CRUD (Create, Read, Update, Delete)
ORM: Object-relational mapping (Mối quan hệ giữa Object và DB)

Tools:

- FrontEnd:
  - React (is a free and open-source front-end JavaScript library for building user interfaces based on UI components)
- BackEnd:
  - Database: MySQL (Xampp: easy to use)
  - Sever: Node.js(Express)
  -

Version: (avoid 'breaking change')

- body-parser@1.19.0 (can get the parameters that the client sends to the server - write API)
- express@4.17.1 (run project)
- ejs@3.1.5 (run logic in html ,ex: if else for...)
- dotenv@8.2.0 (can get the parameters declared in the environment file)

run cmd:
npm install body-parser@1.19.0 dotenv@8.2.0 ejs@3.1.5 express@4.17.1

- "@babel/core":"^7.12.10", (
- "@babel/node":"^7.12.10", @bable is compiler of javascript
- "@babel/preset-env":"7.12.10" )
- "nodemon":"^2.0.7" (If the file has changed, the server will automatically restart)

run cmd:
npm install --save-dev @babel/core@7.12.10 @babel/node@7.12.10 @babel/preset-env@7.12.10 nodemon@2.0.7

download sequelize-cli@6.2.0 -> cung cấp các câu lệnh để thao tác với csdl
npm install --save-dev sequelize-cli@6.2.0
