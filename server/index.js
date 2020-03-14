const express = require('express')
const mongoose = require('mongoose');
const cors  = require('cors')

const stats = require('./routes/stats');
const app = express();
const port  = process.env.PORT || 3000;
mongoose.connect('mongodb://lokeshld12:lokeshld12@ds055525.mlab.com:55525/smsgroup',{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Database connection is success'))
.catch((err) => console.log('Error in DB connection', err.message));


app.use(express.json());
app.use(cors());
app.use('/api/stats', stats)
app.get('/',(req, res) => {
    res.send('API Home Page')
})

app.listen(port,() => console.log(`Server is running on ${port}`));