const registro = document.querySelector("#registro");
registro.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const placa = document.querySelector("#placa").value;
  const modelo = document.querySelector("#modelo").value;

  const Users = JSON.parse(localStorage.getItem("users")) || [];
  const isUserRegistered = Users.find((user) => user.email === email);
  if (isUserRegistered) {
    return alert("El usuario ya está registrado.");
  }

  Users.push({ name: name, email: email, password: password, placa: placa });
  localStorage.setItem("users", JSON.stringify(Users));
  alert("Registro exitoso");
  window.location.href = "index.html";
});
