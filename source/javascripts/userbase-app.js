

window.onload=function(){
  userbase.init({ appId: 'b6ef9303-744c-4a98-818b-99713e54bc0e' })

  function handleLogin(e) {
    e.preventDefault()

    const username = document.getElementById('login-username').value
    const password = document.getElementById('login-password').value

    userbase.signIn({ username, password, rememberMe: 'none' })
      .then((user) => showDB(user.username))
      .catch((e) => document.getElementById('login-error').innerHTML = e)
  }

  function handleSignUp(e) {
    e.preventDefault()

    const username = document.getElementById('signup-username').value
    const password = document.getElementById('signup-password').value

    userbase.signUp({ username, password, rememberMe: 'none' })
    .then((user) => showDB(user.username))
      .catch((e) => document.getElementById('signup-error').innerHTML = e)
  }

  function showDB(username) {
    document.getElementById('auth-view').style.display = 'none'
    document.getElementById('db-view').style.display = 'block'
    document.getElementById('username').innerHTML = username
  }

  document.getElementById('login-form').addEventListener('submit', handleLogin)
  document.getElementById('signup-form').addEventListener('submit', handleSignUp)

  // reset the db view
  document.getElementById('db-view').style.display = 'none'
  
}