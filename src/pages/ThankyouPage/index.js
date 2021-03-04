import React from 'react';

import Navbar from '../../components/Nav';
import Footer from '../../components/Footer';

import './styles.css';

export default function ThankyouPage(props) {
  return (
    <div>
      <Navbar />
      <div id="thankyou-page">
        <div className="thankyou-page-container">
        <h2>Obrigado!</h2>

        <p>Agradecemos por entrar em contato, nossos consultores estão ansiosos em te atender!</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
