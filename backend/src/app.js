const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dasboardRouter = require('./routes/dasboard.routes.js');
const publicRouter = require('./routes/public.routes.js');

const app = express();


app.use(cors({
  origin:"http://localhost:5173",
  credentials:true,
  
}))
app.use(express.json());
app.use(morgan("dev"));


app.use("/v1/api/profile/me",dasboardRouter);
app.use("/v1/api/public",publicRouter);



app.use((req, res) => {
    res.status(404).json({ message: "OOPS!! PAGE NOT FOUND" });
});

module.exports = app;
