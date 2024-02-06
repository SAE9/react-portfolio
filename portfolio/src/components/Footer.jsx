import React from 'react';
import githubImage from '../images/github_icon.png';
import emailImage from '../images/4550857_email_gmail_mail_sending_yahoo_icon.png';
import linkedinImage from '../images/5279114_linkedin_network_social network_linkedin logo_icon.png';
import cvImage from '../images/10219191_curriculum_vitae_cv_job profile_biodata_icon.png';

import '../css/footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row d-flex align-items-end justify-content-center'>
          <div className='col-12 col-md-6 sm-4 footerText'>
            <p>Copyright &copy; 2024 Sumayyah Akther Emama. All Rights Reserved.</p>
          </div>
          <div className='col-12 col-md-6 socialMedia d-flex d-flex justify-content-end'>
            <a href="https://github.com/SAE9" target="_blank"rel="noopener noreferrer" ><img src={githubImage} alt="GitHub" className='socialIcon' id='githubIcon'/></a>
            <a href="mailto:s.emama@hotmail.com" target="_blank" rel="noopener noreferrer"><img src={emailImage} alt="Email" className='socialIcon'/></a>
            <a href="https://www.linkedin.com/in/sumayyah-e-9ab4bb192/" target="_blank" rel="noopener noreferrer" ><img src={linkedinImage} alt="LinkedIn" className='socialIcon'/></a>
            <a href='/pdf/Tech -cv.pdf' target="_blank" rel="noopener noreferrer"><img src={cvImage} alt="Curriculum Vitae" className='socialIcon'/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;


