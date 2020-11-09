import React from "react";

const CustomerProfile = props => {
  console.log("profile", props);
  return (
    <div>
      <p>Customer {props.id} Profile</p>
    </div>
  );
};

export default CustomerProfile;
