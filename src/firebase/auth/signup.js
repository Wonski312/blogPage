import app from '../firebaseConfig';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

const auth = getAuth(app);

export default async function signUp(email, password) {
console.log(email,password);
    let result = null,
        error = null
    try {

        result = await createUserWithEmailAndPassword(auth, email, password)
    }catch(e){
        error = e;
    }

    return {result,error};
}

