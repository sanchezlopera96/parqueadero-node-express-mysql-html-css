const login = document.querySelector('#login')
login.addEventListener('submit', (e)=>{
  e.preventDefault()
  const name = document.querySelector('#name').value
  const password = document.querySelector('#password').value
  const Users = JSON.parse(localStorage.getItem('users')) || []
  const validUser = Users.find(user => user.name === name && user.password === password)
  if(!validUser){
    return alert('Usuario y/o contraseña inválido')
  } 
  alert(`Bienvenido ${validUser.name}`)
  localStorage.setItem('login_true', JSON.stringify(validUser))
  window.location.href = 'index.html'
})