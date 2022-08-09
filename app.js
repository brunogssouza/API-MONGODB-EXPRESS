import DB_CONNECTION from './database/dbconnection.js';
import  express  from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from './routes/routes.js';

const app = express();

//Middlewares
app.use(bodyParser.json());

//Main route
app.use('/users', router);


//Server listener

const PORT = 5000;


app.listen(PORT, () => {
    console.log(`Server is up on http://localhost:${PORT}`);
})

//DB connection

mongoose.connect(DB_CONNECTION, () => {
    console.log('Connected to the database!');
})