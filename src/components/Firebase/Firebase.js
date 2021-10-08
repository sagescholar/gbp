// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app"
import { getFirestore, collection,addDoc } from "@firebase/firestore";

import { doc, setDoc, Timestamp } from "firebase/firestore";
import { Button } from "@material-ui/core";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3gUH1HY51i5UBudAfzGR7eUQBANBOnOs",
  authDomain: "granblueportal2.firebaseapp.com",
  projectId: "granblueportal2",
  storageBucket: "granblueportal2.appspot.com",
  messagingSenderId: "481723174191",
  appId: "1:481723174191:web:d9e6b834ad53b742b925da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

const setFirestore = () => {

    try {
        const docRef = addDoc(collection(db, "users"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export default function Firestore(){
    return(
        
        <div onClick={()=>setFirestore()}>
        <Button>submit</Button>
        </div>
        
    )
}