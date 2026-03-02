console.log("connected");

let wrongCount = 0;

function collectFormData() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  document.getElementById("emailErr").innerHTML = "";
  document.getElementById("passErr").innerHTML = "";

  if (!email) {
    document.getElementById("emailErr").innerHTML = "Email is required";
    wrongCount++;
  }
  else if (email.indexOf("@") == -1) {
    document.getElementById("emailErr").innerHTML = "Email must contain @";
    wrongCount++;
  }

  if (!password) {
    document.getElementById("passErr").innerHTML = "Password is required";
    wrongCount++;
  }
  else if (password.length < 6) {
    document.getElementById("passErr").innerHTML =
      "Password must be at least 6 characters";
    wrongCount++;
  }
  else if (password.indexOf("#") == -1) {
    document.getElementById("passErr").innerHTML =
      "Password must contain #";
    wrongCount++;
  }

  if (wrongCount > 0) {
    document.getElementById("countMsg").innerHTML =
      "Wrong submission count: " + wrongCount;
    return false;
  }

  alert("Login Successful");
  return true;
}