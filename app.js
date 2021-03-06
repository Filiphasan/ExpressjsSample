const express = require("express")
const dotenv = require("dotenv")
dotenv.config();

const port = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
    res.send("Server is Running...")
})

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});