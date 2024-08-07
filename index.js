import express from "express"
import config from 'config';
import setupConfig from './config/configSetup.js';

let app = express()
setupConfig()


let port = config.get("server.port") || 7000
let message = config.get("messages.general_message")

// get key from env
let key = config.get("secret.KEY")

app.get("/", (req, res) => {
    res.send(message)
})

// print secret key
console.log("SECRET_KEY", key);

app.listen(port, () => { console.log("server is running on port " + port) })