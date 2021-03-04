import React from 'react';
import { Button } from '@chakra-ui/react';

import './styles.css';

export default function Valor(props) {
  console.log(props)
  return (
    <div id="valor">

      <div className="box">
        <h3>{props.Data && props.Data[0]}</h3>
        <p>{props.Data && props.Data[1]}</p>
        <p>{props.Data && props.Data[2]}</p>
        <Button
          colorScheme="teal"
          isFullWidth
          onClick={() => window.location.href = "#form"}
          size="md"
          className="btn"
        >
          Matricule-se
        </Button>
      </div>
    </div>
  )
}
