
require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//for uploading file
const fileUpload = require('express-fileupload');
const path = require('path');

const app = express();

// Middleware
app.use(express.json()); // Parse incoming JSON data
app.use(cors()); // Enable CORS for cross-origin requests
app.use(fileUpload({
  useTempFiles:true
  
}));


// Connect to MongoDB
const mongoURI = process.env.MONGO_URL;

(async () => {
  try {
    await mongoose.connect(mongoURI);
      //, 
      //{
    //   useNewUrlParser: true, // Deprecated in newer Mongoose versions, but might be needed for compatibility
    //   useUnifiedTopology: true // Recommended for performance and scalability
    // });
    console.log('MongoDB connected!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit on connection failure (optional)
  }
})();

// Routes (replace with your actual route definitions)

app.use('/user',require('./routes/userRoute'));
app.use('/', require('./routes/educRoute'));
app.use('/', require('./routes/aboutRoute')); // Assume this is your route for the About page
app.use('/', require('./routes/achievementRoute'));
app.use('/', require('./routes/projectRoute'));
app.use('/', require('./routes/skillRoute'));
app.use('/',require('./routes/upload'));
app.use('/contact',require('./routes/contactRoute'));


// Environment variable for port (default 5000)
const PORT = process.env.PORT || 5000;


// __dirname = path.resolve();
// //static assests
// if(process.env.NODE_ENV==='production'){
//   app.use(express.static('client/build'));
//   app.get('*', (req,res)=>res.sendFile(path.resolve(__dirname,'..', 'client' , 'build' , 'index.html')))
// }

__dirname = path.resolve();
// render deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}


// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
