import React, {useState} from 'react';
import './Login.css';
import SignIn from "../SignIn/SignIn";

const Login = () => {

    const [signIn, setSignIn] = useState(false);

    return (
        <div className={'login'}>
            <div className="login__background">
                <img className={'login__logo'} src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="login_logo"/>
                <button className={'login__button'} onClick={() => setSignIn(true)}>Sign In</button>
                <div className="login__gradient" />
            </div>
            <div className="login__body">
                {signIn ? <SignIn /> :
                <>
                    <h1>Unlimited films, TV programmes and more.</h1>
                    <h2>Watch anywhere. Cancel at any time.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    
                    <div className={'login__form'}>
                        <form action="">
                            <input type="email" placeholder={'Email address'}/>
                            <button className={'login__getStarted'} onClick={() => setSignIn(true)}>GET STARTED</button>
                        </form>
                    </div>
                </>
                }
            </div>
        </div>
    );
};

export default Login;