import React from "react";
import { useSelector } from "react-redux";

const ProfileDetails = (props) => {
  const data = useSelector((state) => state.profile.userData);
  const userdata = JSON.parse(localStorage.getItem('profileData'));
  
  
  const { email, displayName, photoUrl } = userdata?.[0] || {};

  return (
    <>
      <h1>Profile</h1>
      <div>
        {email && <p>Email: {email}</p>}
        {displayName && <p>Display Name: {displayName}</p>}
        {photoUrl && <img src={photoUrl} alt={`Profile of ${displayName}`} />}
      </div>
    </>
  );
};

export default ProfileDetails;
