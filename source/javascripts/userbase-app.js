

window.onload=function(){
  userbase.init({ appId: 'b6ef9303-744c-4a98-818b-99713e54bc0e' })
    .then((session) => session.user ? showDB(session.user.username) : showAuth())
    .catch(() => showAuth())
    .finally(() => document.getElementById('loading-view').style.display = 'none')

  function handleLogin(e) {
    e.preventDefault()

    const username = document.getElementById('login-username').value
    const password = document.getElementById('login-password').value

    userbase.signIn({ username, password, rememberMe: 'local' })
      .then((user) => showDB(user.username))
      .catch((e) => document.getElementById('login-error').innerHTML = e)
  }

  function handleSignUp(e) {
    e.preventDefault()

    const username = document.getElementById('signup-username').value
    const password = document.getElementById('signup-password').value

    userbase.signUp({ username, password, rememberMe: 'local' })
      .then((user) => showDB(user.username))
      .catch((e) => document.getElementById('signup-error').innerHTML = e)
  }

  function handleLogout() {
    userbase.signOut()
      .then(() => showAuth())
      .catch((e) => document.getElementById('logout-error').innerText = e)
  }

  function showDB(username) {
    document.getElementById('auth-view').style.display = 'none'
    document.getElementById('db-view').style.display = 'block'

    // reset the db view
    document.getElementById('username').innerHTML = username
    document.getElementById('db-loading').style.display = 'block'
    document.getElementById('db-error').innerText = ''
  }

  function showAuth() {
    document.getElementById('db-view').style.display = 'none'
    document.getElementById('auth-view').style.display = 'block'
    document.getElementById('login-username').value = ''
    document.getElementById('login-password').value = ''
    document.getElementById('login-error').innerText = ''
    document.getElementById('signup-username').value = ''
    document.getElementById('signup-password').value = ''
    document.getElementById('signup-error').innerText = ''
  }

  document.getElementById('login-form').addEventListener('submit', handleLogin)
  document.getElementById('signup-form').addEventListener('submit', handleSignUp)
  document.getElementById('logout-button').addEventListener('click', handleLogout)

  document.getElementById('db-view').style.display = 'none'
  document.getElementById('auth-view').style.display = 'none'
  
}