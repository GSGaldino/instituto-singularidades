import React from 'react';
import { Button, Heading } from '@chakra-ui/react';
import { BrowserView, MobileView } from 'react-device-detect';

import './styles.css';

function MainCurso(props) {
  return (

    <div>
      <BrowserView renderWithFragment>
        <section
          id="MainCurso"
          style={{
            backgroundImage: `url("${props.desktopBackground}")`
          }}
        >
          <div id="container">
            <div className="column-1">
              {props.Title ? <Heading as="h3" size="lg" color="#EDEDED">{props.Title}</Heading> : ""}
              {props.Text ? props.Text.map((text) => (<p key={text.length}>{text}</p>)) : ""}
              {/* {props.Button.length ? <div className="button-holder"><a href="#form" className="buttonSubmit">{props.Button[0]}</a></div> : ""} */}
              {props.Button &&
                <div className="button-holder">
                  <Button 
                    colorScheme="teal" 
                    isFullWidth 
                    onClick={() => window.location.href = "#form"}
                  >
                    {props.Button}
                  </Button>
                </div>
              }
            </div>
            <div className="column-2">
            </div>
          </div>

        </section>
      </BrowserView>

      <MobileView renderWithFragment>
        <section
          id="MainCurso">
          <div className="column-1" style={{ backgroundImage: `url("${props.MobileBackground}")` }}>
            {props.Title ? <h2>{props.Title}</h2> : ""}
            {props.Text ? props.Text.map((text) => (<p key={text.length}>{text}</p>)) : ""}
            {props.Button.length ? <div className="button-holder"><a href="#form" className="buttonSubmit">{props.Button[0]}</a></div> : ""}
          </div>
          <div className="column-2">
          </div>

        </section>
      </MobileView>
    </div>
  );
}

export default MainCurso;
