import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const db = [
  {
    id: 1,
    username: "vaqueros@utrgv.edu",
    password: "goUTRGV!"
  },
  {
    id: 2,
    username: "student@utrgv.edu",
    password: "student123"
  },
];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const registeredUser = db.find( (user) => user.email === email);
    
    // TODO: register new user 
    // - validate previous registration
    // - if all good, send them to the secret page
      

  } catch (err) {
    console.log(err);
  }
});

app.post("/login", (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const registeredUser = db.find( (user) => user.email === email);
    
    // TODO: validate user credentials 
    // - if all good, send them to the secret page
    // - otherwise, display an error when the user is not found or invalid password

   
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
