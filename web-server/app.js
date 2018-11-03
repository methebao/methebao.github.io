var express = require("express"),
  path = require("path"),
  app = express();

//set the port
const port = process.env.PORT || 5000;

app.set("port", port);

//tell express that we want to use the www folder
//for our static assets
app.use("/", express.static(path.join(__dirname, "../www")));
app.use(
<<<<<<< HEAD
  "/projects/ivy",
  express.static(path.join(__dirname, "../www/projects/ivyfood"))
);
app.use(
  "/projects/ivy/",
  express.static(path.join(__dirname, "../www/projects/ivyfood"))
);
=======
  "/projects/ivyfood",
  express.static(path.join(__dirname, "../www/projects/ivyfood"))
);

>>>>>>> natours-dev
app.use(
  "/projects/natours",
  express.static(path.join(__dirname, "../www/projects/natours"))
);

// Listen for requests
var server = app.listen(app.get("port"), function() {
  console.log("The server is running on http://localhost:" + app.get("port"));
});
