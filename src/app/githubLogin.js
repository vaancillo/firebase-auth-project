import { GithubAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js'
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js'

const githubButton = document.querySelector('#githubLogin')

githubButton.addEventListener('click', async e => {
  e.preventDefault()

  const provider = new GithubAuthProvider()

  try {
    const credentials = await signInWithPopup(auth, provider)
    console.log(credentials)

    // Close the login modal
    const modal = bootstrap.Modal.getInstance(document.querySelector('#signin-modal'))
    modal.hide()

    // show welcome message
    showMessage(`Welcome ${credentials.user.displayName}`)
  } catch (error) {
    if (error.code === 'auth/popup-closed-by-user') {
      showMessage('try to login with google or email', 'error')
    }
    console.log(error)
  }
})
