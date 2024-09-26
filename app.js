// var usersData =[];
// var registerBtn = document.getElementById("register")
// registerBtn && registerBtn.addEventListener("click", function(){

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

// console.log(usersData);
//     localStorage.setItem("users",JSON.stringify(usersData))
// var fetchingData= JSON.parse(localStorage.getItem("users"));
// fetchingData.push(usersData)

//    window.location.href ="login.html"
// })




// var loginBtn = document.getElementById("login")


// loginBtn && loginBtn.addEventListener("click", function (event) {


//     var loginEmail = document.getElementById("loginEmail")
//     var loginPass = document.getElementById("loginPassword")

//     var users = JSON.parse(localStorage.getItem("users"));


//     for (var user of users) {
//         if (user.email == loginEmail.value) {

//             if (user.password == loginPass.value) {
//                 console.log("login successfully");

//             }
//             else {
//                 console.log("email is ok wrong password");

//             }

//         }
//         else {
//           if(loginPass.value == user.password){
//             console.log("password is ok email is wrong");
            
//           }

//         }

//     }
// })






// ======================== miss file
// var id = setInterval(function(){
//     console.log("hello");
    
// },1000)

// console.log(id);


// setTimeout(function(){
//    clearInterval(id)
    
// },5000)





// =======================
var registerBtn = document.getElementById("register");
registerBtn && registerBtn.addEventListener("click", function () {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    console.log(name.value, email.value, password.value);

    // Check if any field is empty
    if (name.value === "" || email.value === "" || password.value === "") {
        console.log("All fields are required");
        return;
    }

    // Fetch existing data from localStorage
    var usersData = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email is already registered
    var existingUser = usersData.find(user => user.email === email.value);
    if (existingUser) {
        console.log("Email is already registered");
        return;
    }

    var userObj = {
        name: name.value,
        email: email.value,
        password: password.value,
    };

    // Add new user to the array
    usersData.push(userObj);
    console.log(userObj);

    // Reset form fields
    name.value = "";
    email.value = "";
    password.value = "";

    // Save updated usersData to localStorage
    localStorage.setItem("users", JSON.stringify(usersData));
    console.log(usersData);

    // Redirect to login page
    window.location.href = "login.html";
});

document.addEventListener("click", function () {
    var loginBtn = document.getElementById("login");

    loginBtn && loginBtn.addEventListener("click", function () {
        var loginEmail = document.getElementById("loginEmail").value.trim();
        var loginPassword = document.getElementById("loginPassword").value.trim();

        if (loginEmail === "" || loginPassword === "") {
            console.log("Both email and password fields are required.");
            return;
        }

        var users = JSON.parse(localStorage.getItem("users")) || [];

        if (users.length === 0) {
            console.log("No users found. Please register first.");
            return;
        }

        var userFound = false;

        for (var user of users) {
            if (user.email === loginEmail) {
                userFound = true;

                if (user.password === loginPassword) {
                    console.log("Login successfully");
                    // Redirect to the new page
                    window.location.href = "dashboard.html"; // Replace with the desired URL
                } else {
                    console.log("Email is correct but password is wrong");
                }
                break; // Exit the loop once the user is found
            }
        }

        if (!userFound) {
            console.log("Email not found");
        }
    });
});