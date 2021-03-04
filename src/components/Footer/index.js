import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getIES } from '../../services/api';
import { BrowserView, MobileView } from 'react-device-detect';

import './styles.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Icon(iconName){

  if(iconName === "facebook")
  return( <FaFacebook/>)

  if(iconName === "twitter")
  return( <FaTwitter/>)

  if(iconName === "instagram")
  return( <FaInstagram/>)

  if(iconName === "linkedin")
  return( <FaLinkedin/>)

  else
  return( iconName)
}

function Footer() {
  const [IES, setIES] = useState({ name: '', logoNegative: '', social: [] });

  useEffect(() => {
    const getData = async () => {
      const data = await getIES();
      setIES(data);
    }

    getData();
  }, []);


  return (
    <div>
      <BrowserView renderWithFragment>
        <footer id="footer" className="footer">
          <div className="main">
            <div className="row">
              <div className="inline">
                <Link to="/" activeClassName="selected">Home</Link>
                <Link to="/cursos" activeClassName="selected">Cursos</Link>
                <Link to="/professores" activeClassName="selected">Professores</Link>
              </div>
              <img src={IES.logoNegative} alt="" />
              <div className="inline">
              {Object.entries(IES.social).map((item, key) => (<a key={key} href={item[1]}>{Icon(item[0])}</a>))}
              </div>
            </div>
          </div>
          <div className="bottom">
            <p>Copyright © 2016 {IES.name}</p>
          </div>
        </footer>
      </BrowserView>
      <MobileView renderWithFragment>
        <footer id="footer" className="footer">
          <div className="fix-footer">.</div>
        </footer>
      </MobileView>
    </div>
  );
}

export default Footer;