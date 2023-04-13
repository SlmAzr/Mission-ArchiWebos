
const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const loginButton = document.getElementById("loginButton");
const loginErrorMsg = document.getElementById("login-error-msg");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

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

    const { token } = await response.json();
    localStorage.setItem("token", token);
   
    window.location.href = "./index.html";
  } catch (error) {
    console.log(error);
    loginErrorMsg.style.display = "block";
    loginButton.removeAttribute("disabled");
  }
});
