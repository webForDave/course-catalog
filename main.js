"use strict";

const express = require("express");
const app = express();
const homeController = require("./controllers/homeController");
const errorController = require("./controllers/errorController");
const layout = require("express-ejs-layouts");

// Uses the current environment port variable or default to 3000
app.set("port", process.env.PORT || 3000);

// middleware to set the view engine of the application to ejs
app.set("view engine", "ejs");
app.use(express.static("public"))
app.use(layout); 

app.get("/", homeController.showHomePage);
app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showContact);
app.post("/contact", homeController.showContactSuccess);

app.use(errorController.notFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
    console.log(`🚀 Server running on http://localhost:${app.get("port")}`);
})