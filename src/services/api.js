//const baseURL = "https://alumia-static-api.s3-us-east-2.amazonaws.com/Singularidades/database.json";
const baseURL = "../database.json";

//const loadData = [...jsonData];

export const getIES = async () => {
    try {
        const response = await fetch(baseURL, {headers : {'Content-Type': 'application/json','Accept': 'application/json'}});
        const json = await response.json();
        return json.IES;
    } catch (error) {
        console.log(error);
    }
}

export const getCursos = async () => {
    try {
        const response = await fetch(baseURL, {headers : {'Content-Type': 'application/json','Accept': 'application/json'}});
        const json = await response.json();
        return json.Cursos;
    } catch (error) {
        console.log(error);
    }
}

export const getProfessores = async () => {
    try {
        const response = await fetch(baseURL, {headers : {'Content-Type': 'application/json','Accept': 'application/json'}});
        const json = await response.json();
        return json.Professores;
    } catch (error) {
        console.log(error);
    }
}

export const getCursoFilter = async (name: string) => {
    try {
        const response = await fetch(baseURL, {headers : {'Content-Type': 'application/json','Accept': 'application/json'}});
        const json = await response.json();

        var filter = json.Cursos.filter((item: { Slug: string; }) => item.Slug === 'Curso/'+name)
        return filter;
    } catch (error) {
        console.log(error);
    }
}

export const getProfessorFilter = async (name: string) => {
    try {
        const response = await fetch(baseURL, {headers : {'Content-Type': 'application/json','Accept': 'application/json'}});
        const json = await response.json();

        var filter = json.Professores.filter((item: { Slug: string; }) => item.Slug === '../Prof/'+name)
        return filter;
    } catch (error) {
        console.log(error);
    }
}