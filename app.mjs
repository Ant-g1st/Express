import express from "express";

const app = express();
const port = 4000;

app.get("/test", (req, res) => {
    return res.json("Server API is working");
})

app.listen(port, () => {
    console.log (`Server is running at ${port}`);
})