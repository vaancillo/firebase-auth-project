import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js'
import { auth } from './firebase.js'

const signUpForm = document.querySelector('#signup-form')

signUpForm.addEventListener('submit', async (e) => {
  e.preventDefault()

  const email = signUpForm['signup-email'].value
  const password = signUpForm['signup-password'].value

  console.log(email, password)

  try {
    const resultUser = await createUserWithEmailAndPassword(auth, email, password)
    console.log(resultUser)

    const signupModal = document.querySelector('#signup-modal')
    const modal = bootstrap.Modal.getInstance(signupModal)
    modal.hide()
  } catch (error) {
    console.log(error)
  }
})
