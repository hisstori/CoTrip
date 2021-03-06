import React from "react";
import "./ComingSoonPage.css";
import Button from "components/Button/Button";
import ProfilePicture from "components/ProfilePicture/ProfilePicture";

// Function based React Component
const ComingSoonPage = props => {
  // Default Class to apply to Component
  const handleClick = () => {
    props.handle_logout();
    props.history.push("/");
  };
  return (
    <div className="ComingSoonPage__wrapper">
      <span></span>
      <h1>Coming Soon!</h1>
      <h2>Welcome to this page, {props.first_name}</h2>
      <Button text="Logout" handleClick={handleClick} />
      {/* <ProfilePicture type="medium" image={props.image}></ProfilePicture> */}
      <span></span>
    </div>
  );
};

export default ComingSoonPage;
