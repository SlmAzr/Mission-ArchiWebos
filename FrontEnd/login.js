

// document.addEventListener('DOMContentLoaded', () => {
//     const formEl = document.querySelector('.form');
  
//     formEl.addEventListener('submit', event => {
//       event.preventDefault();
  
//       const formData = new FormData(formEl);
//       const data = Object.fromEntries(formData);
//       // console.log(data);
   
//       // fetch("http://localhost:5678/api/users/login")
//       // .then(response => response.json())
//       // .then(vrai=> {
//       //     console.log(vrai.email);
//       // });
  
//       fetch('http://localhost:5678/api/users/login',{
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Cache-Control': 'no-cache'
//         },
//         body: JSON.stringify(data)
        
//       }).then(res => res.json())
//         .then(data => console.log(data))

//     });

//   });



    
  // });
  




  const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const loginButton = document.getElementById("loginButton");
const loginErrorMsg = document.querySelector(".login-error-msg");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  console.log(email, password);

  loginButton.innerHTML = " ";
  loginButton.setAttribute("disabled", true);

  try {
    const response = await fetch("http://localhost:5678/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    loginButton.innerHTML += "Connexion";
    if (!response.ok) {
      alert('mot de passe ou email incorrect')
      throw new Error("Echec de la connexion");
    }

    const { userId, token } = await response.json();
    localStorage.setItem("userId", userId);
    localStorage.setItem("token", token);
    console.log(userId, token);
    window.location.href = "./index.html";
  } catch (error) {
    console.log(error);
    loginErrorMsg.style.display = "block";
    // loginButton.innerHTML += "Echec de la connexion";
    loginButton.removeAttribute("disabled");
  }
});