import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>About me</h1><p>This is the about page.</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact me</h1><p>This is the contact page.</p>");
});


app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
