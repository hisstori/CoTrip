
import React from 'react';
import { Link } from "react-router-dom";
import "./MediaCard.css";


// Function based React Component
const MediaCard = (props) => {

  // Default Class to apply to Component
  let styles = {
    height: '248px',
    width: '248px',
    backgroundImage: `url(${props.imageSrc})`,
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column-reverse'
  }
  let userPath = `/User/--usernameid--`

  console.log(props.imageSrc)
  return (
    <Link className='media-card'to={userPath} style={styles}>
      <footer className='media-footer'>
        <p className='footer-text'>Posted By: {props.userFirstName}</p>
      </footer>
    </Link>
  );
}

export default MediaCard;
