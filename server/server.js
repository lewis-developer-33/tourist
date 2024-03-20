const express = require('express')
const errorHandler = require('./middleware/errorHandler')
const port = 8000
const app = express()

app.use(express.json())
app.use(errorHandler)
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth',require("./routes/authRoute"))

app.use('/api/users',require("./routes/userRoute"))
app.use('/api/activitys',require("./routes/activityRoute"))
app.use('/api/accomodations',require("./routes/acccomodationRoute"))


app.listen(port,() => {
    console.log(`Server running on ${port}`)
})