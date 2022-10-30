import React from "react";
import './Profile.css';
import Navbar from "../../components/Navbar/Navbar";
import {useSelector} from "react-redux";
import {selectUser} from "../../features/userSlice";
import {signOut} from "firebase/auth";
import {auth} from "../../firebase";
import Plans from "../../components/Plans/Plans";

const Profile = () => {
    const user = useSelector(selectUser);
    return <div className={'profile'}>
        <Navbar />
        <div className="profile__body">
            <h1>Edit Profile</h1>
            <div className="profile__info">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar"/>
                <div className="profile__details">
                    <h2>{user.email}</h2>
                    <div className="profile__plans">
                        <Plans />
                        <button className={'profile__signOut'} onClick={() => signOut(auth)}>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Profile;