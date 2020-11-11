import React, { useEffect, useState } from "react";

const CustomerProfile = props => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [vip, setVip] = useState("");
  const [telf, setTelf] = useState("");

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => {
        console.log("aqui algo", data);
        setId(data.id);
        setEmail(data.email);
        if (data.vip === true) {
          setVip(data.vip);
        }
        setTelf(data.phoneNumber);
      });
  }, [props.id]);

  return (
    <div>
      <p>Customer {props.id} Profile</p>
      <li>id {id}</li>
      <li>email {email}</li>
      {vip ? <li>Vip{vip}</li> : null}
      <li>telf {telf}</li>
    </div>
  );
};

export default CustomerProfile;
