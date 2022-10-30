import React, {useEffect} from 'react';
import HomeScreen from "./pages/HomeScreen/HomeSreen";
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/Login/Login";
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from "./firebase";
import {useDispatch, useSelector} from "react-redux";
import {login, logout, selectUser} from "./features/userSlice";
import Profile from "./pages/Profile/Profile";

function App() {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    console.log(user)
    useEffect(() => {
            const unsub = onAuthStateChanged(auth, (userAuth) => {
                if (userAuth) {
                    dispatch(login({
                        uid: userAuth.uid,
                        email: userAuth.email
                    }))
                } else {
                    dispatch(logout());
                }
            })

            return () => {
                unsub()
            }
        }
        , [dispatch])
    return (
        <div className={'app'}>
            {!user ? <Login/> :
                <Router>
                    <Routes>
                        <Route path={'/'} element={<HomeScreen/>}/>
                        <Route path={'/profile'} element={<Profile/>}/>
                    </Routes>
                </Router>}

        </div>
    );
}

export default App;
