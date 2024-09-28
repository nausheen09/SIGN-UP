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


    // Retrieve existing users data or initialize an empty array
    var usersData = JSON.parse(localStorage.getItem("users")) || [];

    // Update localStorage with the current users data
    localStorage.setItem("users", JSON.stringify(usersData));



    // Check if email is already registered using for loop
    var emailExists = false;

    for (var i = 0; i < usersData.length; i++) {
        if (usersData[i].email === email.value) {
            emailExists = true;
            break; // Email found, no need to check further
        }
    }

    if (emailExists) {
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