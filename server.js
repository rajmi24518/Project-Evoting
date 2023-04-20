//libraries installed using npm
const express = require("express")
const app = express()
const sessions = require('express-session')
const bcrypt = require("bcrypt") //importing bcrypt hash
const LocalStrategy = require("passport-local").Strategy


const mysql = require("mysql");

const connection = mysql.createConnection({
    host:"localhost",
    database:"Voters",
    user:"sqluser",
    password:"password"
});

app.use(express.urlencoded({extended: false}))

app.post("/register",function(req,res){
    var firstname = req.body.f_name;
    var middlename = req.body.m_name;
    var lastname = req.body.l_name;
    var NID = req.body.nid;
    var emaill = req.body.email;
    var PN = req.body.phone;
    connection.connect(function(error)
    {
    if (error) throw error;
    var sql = `INSERT INTO Voters.unauth_user(first_name,middle_name,last_name,national_id,email,phone_number) VALUES('${firstname}','${middlename}','${lastname}','${NID}','${emaill}','${PN}')`;
    connection.query(sql,function(error,result){
    if (error) throw error;
    res.send('RECORD SUCCESSFULL'+ console.log("success"));
    });
    });
    });

app.post('/login', function(req, res) 
{
    var nid = req.body.nid ;
    var ph = req.body.phone ;
    var pass = req.body.password ;
    var session;
    connection.connect(function(error)
    {
        if (error) throw error;
        var sql = `SELECT * FROM Voters.Auth_Voters WHERE NID = '${nid}' AND PH_NO = '${ph}' AND Pswrd = '${pass}' `;
        connection.query(sql,function(error,result)
        {
            if (error) 
            {
                throw error;
            }
            else if(result.length > 0)
            {

                res.send('Logged in.' + console.log("success"));
            }
            else
            {
                res.send('Incorrect info.');
            }
            res.end();
        });
    });
});

/*app.post("/register", async (req, res) => {
    try
    {
        //For hashed password and info
        const hashedPassword = await bcrypt.hash(req.body.password)
        users.push({
            id: Date.now().toString(),
            fname: req.body.f_name,
            mname: req.body.m_name,
            lname: req.body.l_name,
            nid: req.body.nid,
            email: req.body.email,
            phone: req.body.phone

        })
        res.redirect("/")
    }
    catch(e)
    {
        console.log(e);
        res.redirect("/register")
    }
})*/

//routes
app.use("/css", express.static("css"));
app.use("/img", express.static("img"));
app.use("/js", express.static("js"));

app.get('/', (req,res) => {
    res.render("index.ejs")
})

app.get('/login', (req,res) => {
    res.render("login.ejs")
})

app.get('/register', (req,res) => {
    res.render("register.ejs")
})

app.get('/aboutus', (req,res) => {
    res.render("aboutus.ejs")
})

app.get('/contactus', (req,res) => {
    res.render("contactus.ejs")
})

app.get('/remember', (req,res) => {
    res.render("for_pass.ejs")
})
//end routes

app.listen(4000)