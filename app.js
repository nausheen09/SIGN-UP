// var usersData =[];
// var registerBtn = document.getElementById("register")
// registerBtn.addEventListener("click", function(){

//     var name = document.getElementById("name")
//     var email = document.getElementById("email")
//     var password = document.getElementById("password")
//     console.log(name.value, email.value, password.value);

//     var userObj = {
//         name: name.value,
//         email: email.value,
//         password: password.value,
//     }
//     usersData.push(userObj)
//     console.log(userObj)

//     name.value =""
//     email.value = ""
//     password.value= ""
//     localStorage.clear()

//     localStorage.setItem("userData",JSON.stringify(usersData))
//    window.location.href ="login.html"
// })

// var loginBtn = document.getElementById("loginBtn");
// loginBtn.addEventListener("click", function(){
//     var loginEmail = document.getElementById("login-email")
//     var loginPassword = document.getElementById("login-password")
//     console.log(loginEmail.value, loginPassword.value)
// })





// ====================
if (localStorage.getItem("userData")) {
    usersData = JSON.parse(localStorage.getItem("userData"));
}

var usersData = JSON.parse(localStorage.getItem("userData")) || [];

var registerBtn = document.getElementById("register");
registerBtn && registerBtn.addEventListener("click", function() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    console.log(name.value, email.value, password.value);

    var userObj = {
        name: name.value,
        email: email.value,
        password: password.value,
    };

    usersData.push(userObj);
    console.log(userObj);

    name.value = "";
    email.value = "";
    password.value = "";

    localStorage.setItem("userData", JSON.stringify(usersData));
    window.location.href = "login.html";
});

var loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", function() {
    var loginEmail = document.getElementById("login-email");
    var loginPassword = document.getElementById("login-password");
    console.log(loginEmail.value, loginPassword.value);

    // Check if user exists
    var userExists = usersData.some(user => user.email === loginEmail.value && user.password === loginPassword.value);

    if (userExists) {
        alert("Login successful!");
        // Redirect or perform another action
    } else {
        alert("Invalid email or password.");
    }
});
