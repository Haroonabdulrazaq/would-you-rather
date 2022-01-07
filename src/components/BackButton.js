import React from 'react';
import { Link } from 'react-router-dom';
import './backButton.scss';

function BackButton() {


  return (
    <Link to='/'
      className="button icon-left">
        Back
    </Link>
  )
}

export default BackButton;
