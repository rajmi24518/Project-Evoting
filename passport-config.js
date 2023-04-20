const LocalStrategy = require("passport-local").Strategy
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