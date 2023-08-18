import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js'
import { getDocs, collection } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js'
import { auth, db } from './app/firebase.js'
import { loginCheck } from './app/loginCheck.js'
import { setUpPost } from './app/postList.js'
import './app/signupForm.js'
import './app/logout.js'
import './app/signinForm.js'
import './app/googleLogin.js'
import './app/facebookLogin.js'
import './app/githubLogin.js'

onAuthStateChanged(auth, async (user) => {
  loginCheck(user)
  if (user) {
    const querySnapshot = await getDocs(collection(db, 'post'))
    setUpPost(querySnapshot.docs)
  } else {
    setUpPost([])
  }
  loginCheck(user)
})
