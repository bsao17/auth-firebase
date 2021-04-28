import React from 'react'
import firebase from './utils/firebaseConfig'

export default function Main() {
    return (
        <main>
            <nav>
                <p>Hello world it's okay</p>
                <h4>Bonjour {firebase.auth().currentUser.displayName} </h4>
                <button onClick={()=>{
                    firebase.auth().signOut()
                }}>Deconnection</button>
            </nav>
        </main>
    )
}
