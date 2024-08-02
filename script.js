// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Add JavaScript functionality here for login and account creation
});

// Login function
function login() {
    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log("User logged in: ", user);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error("Error: ", errorCode, errorMessage);
        });
}

// script.js

const translations = {
    en: {
        siteTitle: "Gurugedara.com",
        primaryStudents: "Primary Students",
        grade1_5: "Grade 1-5",
        grade6_9: "Grade 6-9",
        grade10_11: "Grade 10-11",
        advancedLevel: "Advanced Level",
        aboutus:"About Us",
        emailPlaceholder: "Email",
        passwordPlaceholder: "Password",
        login: "Login",
        
    },
    si: {
        siteTitle: "ගුරුගෙදර.com",
        primaryStudents: "ප්‍රාථමික සිසුන්",
        grade1_5: "1-5 ශ්‍රේණි",
        grade6_9: " 6-9 ශ්‍රේණි",
        grade10_11: "10-11 ශ්‍රේණි",
        advancedLevel: "උසස් පෙළ",
        aboutus:"අපගැන",
        emailPlaceholder: "ඊමේල්",
        passwordPlaceholder: "මුරපදය",
        login: "ප්‍රවේශ වන්න",
        
    }
};

function switchLanguage(language) {
    document.querySelectorAll("[data-translate]").forEach(element => {
        const key = element.getAttribute("data-translate");
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
            if (element.placeholder) {
                element.placeholder = translations[language][key];
            }
        }
    });
}


$(document).ready(function() {
    $("nav a").on("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        var url = $(this).attr("href"); // Get the URL from the link
        $("#content").load(url); // Load content into #content div
    });
});

$(document).ready(function() {
    $("nav a").on("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        var url = $(this).attr("href"); // Get the URL from the link
        $("#content").load(url); // Load content into #content div
    });
});