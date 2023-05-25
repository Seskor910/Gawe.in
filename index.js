//setup
const express = require('express');
//const bodyParser = require('body-parser');
const app = express();
const {Pool} = require('pg');
const port = 3000;

//connect to PostgreSQL server
const pool = new Pool({
    user: '',
    host: 'localhost',
    database: 'Gawe.in',
    password: '',
    port: 5432,
});

//middleware
app.use(express.json());

//endpoint for account registration
app.post('/users', (req,res) => {
    const {email, password} = req.body;

    //email check
    if(!email || !password){
        return res.status(405).json({message: 'Email and password is required'});
    }

    //query to database
    pool.query('Insert into users (email,password) values ($1, $2)', [email, password], (err) => {
        if(err){
            console.error('Terjadi kesalahan', err);
            return res.status(505).json({message: 'error when saving'});
        }

        res.status(200).json({message: 'success'});
    });
});

app.listen(port, () => {
    console.log(`Server di http://localhost:${port}`);
});

