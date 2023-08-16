/* eslint-disable no-undef */
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js'
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js'

const signUpForm = document.querySelector('#signup-form')

signUpForm.addEventListener('submit', async (e) => {
  e.preventDefault()

  const email = signUpForm['signup-email'].value
  const password = signUpForm['signup-password'].value

  console.log(email, password)

  try {
    const resultUser = await createUserWithEmailAndPassword(auth, email, password)
    console.log(resultUser)
    // close modal
    const signupModal = document.querySelector('#signup-modal')
    const modal = bootstrap.Modal.getInstance(signupModal)
    modal.hide()

    showMessage(`Welcome ${resultUser.user.email}`, 'success')
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      showMessage('Email already in use', 'error')
    } else if (error.code === 'auth/invalid-email') {
      showMessage("That doesn't look like a valid email", 'error')
    } else if (error.code === 'auth/weak-password') {
      showMessage('Password must be at least 6 characters.', 'error')
    } else if (error.code) {
      showMessage(error.message, 'error')
    }
  }
})
