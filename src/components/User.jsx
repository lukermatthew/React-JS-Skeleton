import React, { useEffect, useState } from "react";
import SkeletonUser from "../skeletons/SkeletonUser";

const User = () => {
  const [profile, setProfile] = useState(null);

  // runs automatically after initial render
  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await res.json();
      setProfile(data);
    }, 5000);
  }, []);

  return (
    <div className="user">
      <h2>User Details</h2>

      {profile && (
        <div className="profile">
          <h3>{profile.username}</h3>
          <p>{profile.email}</p>
          <a href={profile.website}>{profile.website}</a>
        </div>
      )}

      {!profile && <SkeletonUser />}
    </div>
  );
};

export default User;
