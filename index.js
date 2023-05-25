//setup
const express = require('express');
const app = express();
const port = 3000;

//end point regis
app.post('/registration', (req,res) =>{
    try{
        const {Email, password, firstName, LastName} = req.body;

        //encrypt password
        const encryptedPassword = await.bcrypt.hash(password);

        const NewUser = {
        Email,
        password: encryptedPassword,
        firstName,
        LastName,
        }
        res.json(NewUser);
    }
    catch(err){
        res.status(500).json({error: 'error'});
    }
    
});

app.get('/', (req, res) => {
    res.send('halo');
});

app.listen(port, () => {
    console.log(`Server di http://localhost:${port}`);
});

