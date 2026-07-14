require("dotenv").config();
const app = require('./src/app.js');
const connect_to_db= require('./src/config/db.js');



app.listen(3000, async() => {
  await connect_to_db();
  console.log("Server is running on Port 3000");
})
