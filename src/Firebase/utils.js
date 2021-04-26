import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import '../FirebaseInit/FirebaseInit';
    
export const auth= firebase.auth();
export const firestore=firebase.firestore();
// make instance of google provider
const GoogleProvider=new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({prompt:'select_account'});
export const  signInWithGoogle=()=>auth.signInWithPopup(GoogleProvider);
// storing data of login in firestore
export const  handleUserProfile=async(userAuth,additionalData) => {
    if(!userAuth) return ;
    const {uid} =userAuth;
    const userRef=  firestore.doc(`users/${uid }`);
    const snapshot = await userRef.get();
    if(!snapshot.exists){
        const {displayName,email}=userAuth;
        const timestamp = new Date();
      try{
     await userRef.set({
     displayName,
     email,
     createDate:timestamp,
     ...additionalData
     });
      }
      catch(error){
     console.log(error);
      }
   }
   return userRef;
}
