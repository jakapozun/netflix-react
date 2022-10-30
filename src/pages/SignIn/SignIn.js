import React, {useRef} from 'react';
import './SignIn.css';
import {auth} from "../../firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {useNavigate} from "react-router-dom";

const SignIn = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

    const register = (e) => {
        e.preventDefault();
        if(!emailRef.current.value || !passwordRef.current.value){
            return;
        }
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(auth,email,password).then( (user) => {
            console.log(user)
        }).catch((error) => {
            alert(error.message)
        })
    }

    const login = (e) => {
        e.preventDefault();
        if(!emailRef.current.value || !passwordRef.current.value){
            return;
        }
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(auth,email,password).then( (user) => {
            console.log(user)
            navigate('/');
        }).catch((err) => alert(err.message))
    }

    return (
        <div className={'signIn'}>
            <form action="">
                <h1>Sign In</h1>
                <input type="email" placeholder={'Email'} ref={emailRef} required/>
                <input type="password" placeholder={'*********'} ref={passwordRef} required/>
                <button type={"submit"} onClick={login}>Sign In</button>

                <h4><span className={'signIn__new'}>New to Netflix?</span> <span className={'signIn__link'} onClick={register}>Sign Up now.</span></h4>
            </form>
        </div>
    );
};

export default SignIn;