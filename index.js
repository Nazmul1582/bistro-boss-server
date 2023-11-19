const express = require('express');
const app = express();
const cors = require("cors")
const port = process.env.PORT || 5000;
require("dotenv").config();

// middleware
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Bistro Boss Server is running... ")
})

app.listen(port, () => {
    console.log(`Bistro Boss is running on PORT ${port}`);
})