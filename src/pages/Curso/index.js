import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Generic from "../../components/Generic";
import Navbar from "../../components/Nav";
import { getCursoFilter } from "../../services/api";

import { useForm, usePlugin, useCMS } from 'tinacms';

const Curso = (props) => {
  const cms = useCMS();
  const [pageData, setPageData] = useState({
    id: 0,
    nameCurso: "",
    codCurso: "",
    briefing: [],
    img_url: "",
    Slug: "",
    Valor: "",
    DesktopBanner: "",
    MobileBanner: "",
    informacaoBasica: [],
    propostaCurricular: [],
    modulos: [],
    faq: []
  });

  useEffect(() => {
    const result = async () => {
      const data = await getCursoFilter(props.match.params.nome);

      if (data[0] !== undefined) {
        setPageData(data[0]);
      } else {
        //history.push(window.location.pathname = "404/");
      }
    };
    result();

  }, [props.match.params.nome]);

  const formConfig = {
    id: 'sing-curso',
    label: 'Editar página - curso',
    fields: [
      {
        name: 'nameCurso',
        label: 'Título',
        component: 'text',
      },
      {
        name: 'briefing',
        label: 'Descrição',
        component: 'list',
        defaultItem: 'Lorem Ipsum',
        field: {
          component: 'text',
        }
      },
      {
        label: 'Banner Desktop',
        name: 'DesktopBanner',
        component: 'image',
        // Generate the frontmatter value based on the filename
        parse: media => media,

        // Decide the file upload directory for the post
        uploadDir: (a) => a.DesktopBanner,

        // Generate the src attribute for the preview image.
        previewSrc: fullSrc => fullSrc,
      },
    {
      name: 'informacaoBasica',
      label: 'Informações sobre o curso',
      component: 'group-list',
      itemProps: (item, index) => ({
        key: index,
        label: item.name
      }),
        fields: [
          {
            label: 'Nome',
            name: 'name',
            description: 'Nome do campo',
            component: 'text',
          },
          {
            label: 'Descrição',
            name: 'desc',
            description: 'Descrição do campo',
            component: 'text',
          },
          {
            label: 'Ícone',
            name: 'icon',
            description: 'Ícone',
            component: 'select',
            options: ['clock', 'duration', 'calendary', 'build']
          }
        ]
},
  {
    name: 'propostaCurricular',
    label: 'Proposta Curricular',
    component: 'group-list',
    itemProps: (item, index) => ({
      key: index,
      label: item.titilo
    }),
      fields: [
        {
          label: 'Título',
          name: 'titilo',
          description: 'Nome do campo',
          component: 'text',
        },
        {
          label: 'Descrição',
          name: 'descricao',
          description: 'Descrição do campo',
          component: 'list',
          defaultItem: 'Lorem Ipsum',
          field: {
            component: 'text',
          }
        },
      ]
      },
{
  name: 'modulos',
    label: 'Módulos',
      component: 'group-list',
        itemProps: (item, index) => ({
          key: index,
          label: item.nameTab
        }),
          fields: [
            {
              label: 'Título',
              name: 'nameTab',
              description: 'Título da aba',
              component: 'text',
            },
            {
              label: 'Descrição',
              name: 'descricao',
              description: 'Descrição',
              component: 'list',
              defaultItem: 'Lorem Ipsum',
              field: {
                component: 'text',
              }
            },
          ]
},
{
  name: 'Valor',
    label: 'Valor',
      component: 'list',
        field: {
    component: 'text',
        }
},
{
  name: 'faq',
    label: 'FAQ',
      component: 'group-list',
        itemProps: (item, index) => ({
          key: index,
          label: item.pergunta
        }),
          fields: [
            {
              label: 'Pergunta',
              name: 'pergunta',
              description: 'Pergunta',
              component: 'text',
            },
            {
              label: 'Resposta',
              name: 'resposta',
              description: 'Resposta',
              component: 'list',
              defaultItem: 'Lorem Ipsum',
              field: {
                component: 'text',
              }
            },
          ]
}
    ],
loadInitialValues: () => {
  return getCursoFilter(props.match.params.nome)
    .then(response => response[0])
},
  onSubmit: async (content) => {
    cms.alerts.info('Salvando...')
    console.log(content)
  },
  }

//Create the form
const [editableData, form] = useForm(formConfig)

//Register it with the CMS
usePlugin(form)

return (
  <div style={{background: "#EDEDED"}}>
    <Navbar />
    <Generic
      idComponent="MainCurso"
      Title={editableData.nameCurso}
      Text={editableData.briefing}
      Button={"Saiba mais"}
      mobileBackgroud={pageData.MobileBanner}
      desktopBackground={editableData.DesktopBanner}
    />

    <Generic
      idComponent="BasicInformation"
      basicInfo={editableData.informacaoBasica}
    />

    {editableData.propostaCurricular
      ? editableData.propostaCurricular.map(
        (item) => (
          <Generic
            idComponent="Text"
            key={Math.random()}
            Title={item.titilo}
            Text={item.descricao}
            DataType={item.titilo}
          />
        )
      )
      : ""}

    <Generic
      idComponent="ModuleTabs"
      Title="Conteúdo programático"
      Data={editableData.modulos}
      DataType=""
    />

    <Generic idComponent="ProfessoresFilter" idCurso={editableData.codCurso} />

    <Generic idComponent="GuiaDoCurso" />
    <Generic idComponent="Valor" Data={editableData.Valor} />
    <Generic idComponent="Form" isFullWidth />

    {editableData.faq && <Generic idComponent="FAQ" Data={editableData.faq} />}

    <Footer />
  </div>
);
};

export default Curso;
