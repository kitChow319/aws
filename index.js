import express from "express"

const app = express()

app.listen(5000, () => {
    console.log("HI123");
    
})

app.get("/", (req,res) => res.json({"message": "Welcome"}))