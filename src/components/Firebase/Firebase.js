// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app"
import { getFirestore, collection,addDoc, query } from "@firebase/firestore";
import { getDocs } from "@firebase/firestore";
import { useState, useEffect } from "react";

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

// Initialize Firebaseß
const app = initializeApp(firebaseConfig);
export const db = getFirestore()

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


const ShowFireStore = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect( () => { 
        async function fetchData() {
            try {
                let content = []
                const snap = await getDocs(collection(db, "users"))
                const bornList = snap.docs.map((doc) => {
                    //console.log(doc.id)
                    //console.log(doc.data().born)
                    content.push(doc.data().first)
                })
                setPosts(content);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);
    return posts
}


export const buildChatLog = () =>{
    
    return(
        <>
        <a>Add Words Test：</a>{ShowFireStore().map((data) => <a>{data}</a>)}
        </>
    )
}