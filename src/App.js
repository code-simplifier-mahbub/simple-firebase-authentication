import "./App.css";
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import app from "./firebase/firebase.init";

const auth = getAuth(app)

function App() {
 const provider = new GoogleAuthProvider();

  const handleGoogleSign = () => {
    signInWithPopup(auth, provider)
    .then(result => {
      const user = result.user;
      console.log(user)
    }).catch(error => {
      console.error('error : ', error)
    })
  };
  return (
    <div className="App">
      <button onClick={handleGoogleSign}>Sign in with Google</button>
    </div>
  );
}

export default App;
