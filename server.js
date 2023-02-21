const express = require("express")
const cors = require('cors');
const ejs = require("ejs")

const app = express()

app.use(express.json())
app.use(cors({origin: true, credentials: true}))

app.engine('.ejs', ejs.__express)
app.set('views',__dirname+'/views')

const port = 3000

let apiData = false

app.get("/api/", (req, res) => {
    res.json({icon: apiData ? "logo_black" : "logo_normal"})
})

app.get("/api/change", (req, res) => {
    res.render("./index.ejs", {icon: apiData})
})

app.post("/api/change", (req, res) => {
    apiData = req.body.icon
    res.sendStatus(200)
})

app.listen(port, () => console.log(`Server is running on port: ${port}`))

