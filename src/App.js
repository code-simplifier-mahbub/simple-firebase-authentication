import "./App.css";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./firebase/firebase.init";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const GoogleProvider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider();

  const handleGoogleSign = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.error("error : ", error);
      });
  };
  const handleGithubSingIn = ()=> {
    signInWithPopup(auth, GithubProvider)
    .then((result) => {
      const user = result.user
      setUser(user)
      console.log(user)
    }).catch((error => {
      console.error('error', error)
    }))
  }

  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(() => {
        setUser({});
      });
  };
  return (
    <div className="App">
      {user.uid ? (
        <button onClick={handleGoogleSignOut}>Sign Out</button>
      ) : (
        <>
          <button onClick={handleGoogleSign}>Google SignIn </button>
          <button onClick={handleGithubSingIn}>Github SignIn</button>
        </>
      )}
      {user.uid && (
        <div>
          <h1>Name: {user.displayName}</h1>
          <p>Email : {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
}

export default App;
