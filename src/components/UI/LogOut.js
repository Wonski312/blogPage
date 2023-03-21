import classes from './Logout.module.scss';
import app from '../../firebase/firebaseConfig';
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import { setUpUser } from '@/store/store';
import { useDispatch } from 'react-redux';
const LogoutButton = () =>{

    const dispatch = useDispatch();
const router = useRouter()
    const auth = getAuth();

    const Logout = () =>{
        signOut(auth).then(() =>{
       dispatch(setUpUser(null))
        router.push('/')
        }).catch((error) =>{
            console.log(error);
        })
    }
    
    return <button onClick={Logout} className={classes.btn}type='button'>Log Out</button>
}

export default LogoutButton;