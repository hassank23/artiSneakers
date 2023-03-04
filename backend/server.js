const app = require("./app");
const dotenv = require("dotenv")
    //database connection
const connectDatabase = require("./config/database");

//configuration of congif to dotenv to import data from config file
dotenv.config({ path: "backend/config/config.env" })

connectDatabase();


//make app listen to the port present in congif file and print on console in wich port it is listening
app.listen(process.env.PORT, () => {
    console.log(`server are running on http://localhost:${process.env.PORT}`)
})