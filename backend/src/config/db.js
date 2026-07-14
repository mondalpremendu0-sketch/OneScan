const mongoose = require("mongoose");


async function connect_to_db() {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connected to Database Successfully")
    })
  } catch (e) {
    throw new Error(e.message);
  }
}


module.exports = connect_to_db