import React from 'react';

import './styles.css';

import Main from '../Sections/Main'
import Depoimentos from '../Sections/Depoimentos';
import Badges from '../Sections/Badges';
import TextComponent from '../Sections/Text';
import BasicInformation from '../Sections/BasicInformation';
import MainCurso from '../Sections/MainCurso';
import ModuleTabs from '../Sections/ModuleTabs';
import OcupationArea from '../Sections/OcupationArea';
import GuiaDoCurso from '../Sections/GuiaDoCurso';
import Valor from '../Sections/Valor';

import Curriculum from '../Sections/Curriculum';
import SelectionCards from '../SelectionCards';
import Form from '../Sections/Form';
import ProfessoresFilter from '../Sections/ProfessoresFilter';
import FAQ from '../Sections/faq';

const Generic = (props) => {
  return (
    <div>
      {props.idComponent === "Main" ? <Main {...props} /> : ""}
      {props.idComponent === "Text" ? <TextComponent {...props} /> : ""}
      {props.idComponent === "Badges" ? <Badges {...props} /> : ""}
      {props.idComponent === "Depoimentos" ? <Depoimentos {...props} /> : ""}

      {props.idComponent === "MainCurso" ? <MainCurso {...props} /> : ""}
      {props.idComponent === "BasicInformation" ? <BasicInformation {...props} /> : ""}
      {props.idComponent === "OcupationArea" ? <OcupationArea {...props} /> : ""}
      {props.idComponent === "ModuleTabs" ? <ModuleTabs {...props} /> : ""}
      {props.idComponent === "GuiaDoCurso" ? <GuiaDoCurso {...props} /> : ""}
      {props.idComponent === "Valor" ? <Valor {...props} /> : ""}
      {props.idComponent === "SelectionCards" ? <SelectionCards {...props} /> : ""}
      {props.idComponent === "Form" ? <Form {...props} /> : ""}
      {props.idComponent === "Curriculum" ? <Curriculum {...props} /> : ""}
      {props.idComponent === "ProfessoresFilter" ? <ProfessoresFilter {...props} /> : ""}
      {props.idComponent === "FAQ" ? <FAQ {...props} /> : ""}
    </div>
  );
}

export default Generic;
