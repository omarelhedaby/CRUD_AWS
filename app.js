const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')

// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI = "mongodb+srv://omaressam33:Omar%40essam33@cluster0.lj9fz.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));


app.use(express.json({ extended: true }));

// routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.use('/blogs', blogRoutes);

app.use((req, res) => {
  res.status(404).json({ errorMessage: 'Page Not Found' });
});