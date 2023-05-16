import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../services/firebase";
import reactLogo from '../assets/react.svg'
import './app.css'

function App() {

  const onClickGoogleLogin = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        console.log(result.user)
      })
  }

  return(
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Login Providers</h1>
      <div className="card">
        <button onClick={onClickGoogleLogin}>
          Login with Google
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
