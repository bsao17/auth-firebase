import React, {useState} from 'react'
import { useEffect } from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui';
import Main from './Main';
import firebase from './utils/firebaseConfig'


function App() {
  const[isSignin, setSignin] = useState(false);

  const uiConfig = {
    signinFlow: 'popup',
    signInOptions: [
      // List of OAuth providers supported.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
     signInSuccess: () => false
    }
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user)=>{
      setSignin(!!user);
      console.log(user);
    })
  }, [])



  return (
    <div className="App">
      {isSignin ? (
        <Main />
      ) : (
        <div className="login-page" style={{ textAlign: 'center'}}>
          <h1>--Jet Set--</h1>
          <StyledFirebaseAuth
          uiConfig = {uiConfig}
          firebaseAuth = {firebase.auth()}
          />
        </div>
      )}
    </div>
  );
}

export default App;
