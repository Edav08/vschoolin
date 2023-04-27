var user = {username:"bob1", password:"12345"};

function login(username, password){
    if (username !== user.username){
        throw new Error ("invalid username")
    } else if (password !== user.password){
        throw new Error ("invalid password")
    } else {
        console.log("Login Sucessful")
    }

}

try{
    login("Joe", "12345")
} catch(err){
    console.log(err.message)
}

try{
    login("bob1", "hammertime")
} catch(err){
    console.log(err.message)
}
try{
    login("bob1", "12345")
} catch (err){
    console.log(err)
}