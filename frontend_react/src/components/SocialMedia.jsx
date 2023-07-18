import React from 'react';
import {BsInstagram} from 'react-icons/bs';
import { FaLinkedin, FaGithub} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'> 

        <div>
            <BsInstagram/>
        </div>
        <div>
            <FaLinkedin/>
        </div>
        <div>
            <FaGithub/>
        </div>    
    </div>
  )
}

export default SocialMedia