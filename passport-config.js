/*const LocalStrategy = require("passport-local").Strategy
const bcrypt = require("bcrypt")

function initialize(passport)
{
    //function to authenticate users
    const authenticateUsers = async (nid, phone, password, done) => {
        //Get users by email
        const user = getUserByEmail(email)
        if(user==null)
        {
            return done(null, false, {message: "No user found with that email."})
        }
        try{
            if (await bcrypt.compare(password, ))
        }
    }
}

/*app.post('/login', function(req, res, next)
{
    var NID = req.body.nid;
    var ph = req.body.phone;
    var pass = req.body.password;

    if(NID && ph && pass)
    {
        connection.query = ` SELECT * FROM Auth_Voters WHERE NID = "${NID}"`;

        mysql.query(query,function(error,data)
        {
            if(data.length > 0)
            {
                for(var count = 0; count < data.length; count++)
                {
                    if(data[count].PH_NO == ph)
                    {
                        request.session.ID = data[count].user_ID;

                        response.redirect("/");
                    }
                    else
                    {
                        response.send('Incorrect password');
                    }
                }
            }
            else
            {
                res.send('Incorrect Email Adress');
            }
            res.end();
        })
    }
    else
    {
        response.send('Please Enter Email Address and Password Details');
        response.end();
    }
})*/

/*app.post("/login", function (req, res)
{
    var nid = req.body.nid ;
    var ph = req.body.phone ;
    var pass = req.body.password ;
    connection.connect(function(error)
    {
        if (error) throw error;
        var sql = `SELECT * FROM Auth_Voters WHERE NID = "${NID}" `; 
        mysql.query(sql, function(error,data)
        {
            if(error) throw error;
            else if (data.length > 0)
            {
                for(var count = 0; count < data.length; count++)
                {
                    if(data[count].PH_NO == ph && data[count].Pswrd == pass)
                    {
                        req.session.user_id = data[count].ID;

                        res.redirect("/");
                    }
                    else
                    {
                        res.send('Incorrect phone num.');
                    }
                    
                }
            }
            else
            {
                res.send("/login");
            }
            res.end();

        })
        /*function(error, res, fields)
        {
            if (res.length > 0)
            {
                res.send("/welcome");
            }
            else
            {
                res.send("/login");
            }
            res.end();
        } ;

    })
})*/