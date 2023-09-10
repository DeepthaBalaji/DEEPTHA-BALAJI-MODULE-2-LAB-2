//variable code
// Import the required modules
//const express = require('express');
//const bodyParser = require('body-parser');
//const path = require('path');

// Create an instance of express
//const app = express();

// We use the 'body-parser' middleware to parse the incoming request bodies
//app.use(bodyParser.urlencoded({ extended: false }));

// set the view engine to ejs
//app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'views'));
//console.log('views', path.join(__dirname, 'views'));
// create a route for the home page
// The GET route for the form
//app.get('/', (req, res) => {
    // Render the form and pass in the current student data
 //   res.render('index');
//});

// create a route for user to enter the numbers
//app.post("/calculate", (req, res) => {
    //const { num1, num2 } = req.body;
    //const sum = Number(num1) + Number(num2);
    //const difference = Number(num1) - Number(num2);
    //const product = Number(num1) * Number(num2);
   // const quotient = Number(num1) / Number(num2);
 //   res.render("result", { sum, difference, product, quotient });
//});

// Start the server on port 4001,
//const port = 4002;
// the quotes are replaced by back ticks next to key caps 1
//app.listen(port, () => {
//    console.log(`Server is running on ${port}`);
//});

//arrays code for book
const books = [];
app.get("/", (req, res) => {
    res.render("books", { books });
});
app.post("/addBook", (req, res) => {
     const { title, author, publicationYear } = req.body;
    books.push({ title, author, publicationYear }); 
    res.redirect("/");
});

//spread operator
const fruits = ["Apple", "Orange", "Banana"];
app.get("/", (req, res) => {
    res.render("fruits", {fruits});
});

app.post("/addFruit", (req, res) => {
    const{fruit} = req.body;
    fruits.push(fruit);
    res.redirect("/");
});


//httprequest code
// Import the required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Create an instance of express
const app = express();
 
// We use the 'body-parser' middleware to parse the incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
console.log('views', path.join(__dirname, 'views'));

app.get("/httpRequest", (req, res) => {
    res.render("httpRequest"); // Assuming "httpRequest.ejs" is the name of your EJS file.
});

////  Write your code here
const axios = require("axios");

app.post("/makeRequest", async (req, res) =>{
    const {url} = req.body;
    try{
        const response = await axios.get(url);
        res.json(response.data);
         }catch (error){
            res.json({error: error.message});
         }
});

// Start the server on port 5006,

var port = 5008
// NOTE
// the quotes are replaced by back ticks ` next to key caps 1
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

//Asynchronous code
  const express = require('express');
  const app = express();
  
  app.get("/simulateAsync", async (req, res) => {
      // Simulate an asynchronous operation, e.g., a delay
      setTimeout(() => {
          const responseData = { message: "Asynchronous operation completed!" };
          res.json(responseData);
      }, 2000); // Simulating a 2-second delay
  });
  
  const port = 3000; // Change this to your desired port
  app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
  });

 