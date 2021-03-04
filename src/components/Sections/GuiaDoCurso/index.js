import React from 'react';
import { Button, Heading } from '@chakra-ui/react';

import './styles.css';

export default function GuiaDoCurso(props) {
  return (
    <div id="guia-do-curso">
      <Heading as="h3" size="md" color="#EDEDED">Guia do curso</Heading>
      <p>Saiba como funciona toda a dinâmica do curso escolhido através do nosso guia completo em PDF.</p>
      <div className="container-button">
        <Button
          color="#1D3A65"
          isFullWidth
          size="md"
          style={{
            marginTop: '20px',
          }}
        >Baixar Agora</Button>
      </div>
    </div>
  )
}
