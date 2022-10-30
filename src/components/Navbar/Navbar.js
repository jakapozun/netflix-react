import React, {useEffect, useState} from 'react';
import './Navbar.css';
import {useNavigate} from "react-router-dom";

const Navbar = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const transitionNavBar = () => {
        if(window.scrollY > 100){
            setShow(true);
        } else{
            setShow(false);
        }
    }

    useEffect( () => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, [])

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__contents">
                <img className={'nav__logo'} src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo" onClick={() => navigate('/')}/>
                <img className={'nav__avatar'} src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" onClick={() => navigate('/profile')}/>
            </div>
        </div>
    );
};

export default Navbar;