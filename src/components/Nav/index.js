import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserView, MobileView } from "react-device-detect";
import { AiOutlineHome } from 'react-icons/ai';
import { GiTeacher } from 'react-icons/gi';
import { IoSchoolOutline } from 'react-icons/io5';
import { Button } from '@chakra-ui/react';
import { useCMS } from 'tinacms';

import { SignOutButton } from 'react-serverless-auth';

import { getIES } from "../../services/api"

import './styles.css'


function Navbar() {
  const [IES, setIES] = useState({ logo: '' });
  const cms = useCMS();

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
        <header id="navbar">
          <img src={IES.logo} alt="" />
          <nav>
            <ul>
              <li>
                <Link to="/">
                  <Button 
                    variant="link"
                    color="#802460"
                    >Home</Button>
                </Link>
              </li>
              <li>
                <Link to="/cursos">
                  <Button 
                    variant="link"
                    color="#802460"
                  >Cursos</Button>
                </Link>
              </li>
              <li>
                <Link to="/professores">
                  <Button 
                    variant="link"
                    color="#802460"
                  >Professores</Button>
                </Link>
              </li>
              <li><Button onClick={() => cms.toggle()} variant="link" color="#802460">
                {cms.enabled ? 'Exit Edit Mode' : 'Edit This Site'}
              </Button></li>
              <li><SignOutButton className={"btn"}>Sign Out</SignOutButton></li>
            </ul>
          </nav>

        </header>

      </BrowserView>

      <MobileView renderWithFragment>
        <nav id="navbar-mobile" className="nav">
          <ul>
            <li className="link-mobile"><Link to="/" activeClassName="selected-mobile"><AiOutlineHome /></Link></li>
            <li className="link-mobile"><Link to="/cursos" activeClassName="selected-mobile"><IoSchoolOutline /></Link></li>
            <li className="link-mobile"><Link to="/professores" activeClassName="selected-mobile"><GiTeacher /></Link></li>
          </ul>
        </nav>
      </MobileView>
    </div>
  );
}

export default Navbar;
