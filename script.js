const form = document.querySelector("form");
const input = document.querySelector("input");
const alertInfo = document.querySelector("header form span");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (input.value == "" || !input.value.match(pattern)) {
    input.style.borderColor = "hsl(354, 100%, 66%)";
    alertInfo.style.display = "block";

    input.value = "";
    input.placeholder = "example@email.com";

    input.classList.add('error-placeholder');
    return (alertInfo.innerHTML = "Please provide a valid email address");
  }

  return alert("Thank you for filling in your email address.");
});

function alertMsg() {
  input.style.borderColor = "hsl(354, 100%, 66%)";
  alertInfo.style.display = "block";
}

function clearAlert() {
  input.style.borderColor = "hsla(0, 0%, 59%, 50%)";
  alertInfo.style.display = "none";

    input.placeholder = "Your email address";

    input.classList.remove('error-placeholder');
    
}

input.addEventListener("keypress", () => {

    clearAlert();
});