import React, { useContext ,useEffect} from 'react'
// import AuthContext from '../AuthContext/auth-context';
import { useDispatch, useSelector } from 'react-redux';
import { updateData } from '../Reducers/AuthSlice';

const Profile = () => {
    // const authcontext=useContext(AuthContext)
    const token=useSelector(state=>state.auth.token)
    const retrievedData=useSelector(state=>state.auth.retrievedData)
    const dispatch=useDispatch()

    useEffect(() => {
        const storedProfileData = localStorage.getItem('profileData');
        if (storedProfileData) {
          dispatch( updateData(JSON.parse(storedProfileData)));
        }
    }, []);

    useEffect(() => {
        fetch(
            "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCyzE7q_jL2tqmuLQQXUYBsDY2OgHdHd0E", 
            {
                method: "POST",
                body: JSON.stringify({
                    idToken: token,
                }),
                headers: {
                    "content-type": "application/json",
                },
            }
        )
        .then((res) => {
            if (res.ok) {
              
                return res.json();
            } else {
                return res.json().then((data) => {
                    let errorMessage = "Authentication failed";
                    throw new Error(errorMessage);
                });
            }
        })
        .then((data) => {
            console.log('Hhi',data.users);
            localStorage.setItem('profileData', JSON.stringify(data.users));
           dispatch( updateData(data.users));
        })
        .catch((err) => {
            alert(err.message);
        });
    }, []);

    return (
        <div>
            <h1>Your Profile</h1>
            {retrievedData && retrievedData.map((profile,index)=>(
                <div key={index}>
                    <h3>Name:</h3>
                    <p>{profile.displayName}</p>
                    <h3>Email:</h3>
                    <p>{profile.email}</p>
                   <h3>Profile Photo:</h3>
                    <img src={profile.photoUrl} alt="" />
                </div>
            ))}
        </div>
    )
}

export default Profile;
