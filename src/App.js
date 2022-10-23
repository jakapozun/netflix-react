import React, {useEffect} from 'react';
import HomeScreen from "./pages/HomeScreen/HomeSreen";
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/Login/Login";
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from "./firebase";

function App() {

    useEffect(() => {
            const unsub = onAuthStateChanged(auth, (userAuth) => {
                if (userAuth) {
                    //
                } else {
                    //
                }
            })

            return () => {
                unsub()
            }
        }
        , [])
    return (
        <div className={'app'}>
            <Router>
                <Routes>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/'} element={<HomeScreen/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
