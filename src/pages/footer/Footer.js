import React from 'react'
import linkedin from './linkedin.svg';
import facebook from './facebook.svg';
import instagram from './instagram.svg'
import twitter from './twitter.svg'
import data from '../../profileData/profileData';
import './Footer.css'
function Footer() {

  const thisYear = new Date().getFullYear();

  return (
    <div className='footer'>
      <div className='social-link'>
        {data.social_links.facebook !== "" &&
          <a href={data.social_links.facebook} target="_blank" rel="noreferrer">
            <img src={facebook} alt="facebook" />
          </a>
        }
        {data.social_links.instagram !== "" &&
          <a href={data.social_links.instagram} target="_blank" rel="noreferrer">
            <img src={instagram} alt="instagram" />
          </a>
        }
        {data.social_links.linkedin !== "" &&
          <a href={data.social_links.linkedin} target="_blank" rel="noreferrer">
            <img src={linkedin} alt="linkedin" />
          </a>
        }
        {data.social_links.twitter !== "" &&
          <a href={data.social_links.twitter} target="_blank" rel="noreferrer">
            <img src={twitter} alt="twitter" />
          </a>
        }
      </div>
      <div>
        <p>Copyright &copy; {thisYear} {data.first_name} {data.last_name}</p>
      </div>
    </div>
  )
}

export default Footer