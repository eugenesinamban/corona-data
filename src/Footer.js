import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <p id="footer-title">Created by <a href="https://eugenesinamban.com" target="_blank" className="link" rel="noopener noreferrer">Eugene</a></p>
      <p><a href="https://twitter.com/codejunkie21" target="_blank" className="link" rel="noopener noreferrer"><FontAwesomeIcon icon={ faTwitter } size="3x" /></a>
      <a href="https://github.com/eugenesinamban" target="_blank" className="link" rel="noopener noreferrer"><FontAwesomeIcon icon={ faGithub } size="3x" /></a></p>
    </footer>
  );
}

export default Footer;