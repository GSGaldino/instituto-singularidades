import React, { useEffect, useState } from 'react';
import { Input, Stack, Heading, Button } from '@chakra-ui/react';
import { FiCheckCircle } from 'react-icons/fi';

import './styles.css'

function FormComponent(props) {
	const [sucessSubmit, setSucessSubmit] = useState(false);
	//const startTime = new Date().getTime();
	//let endTime = new Date().getTime();

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		whatsapp: ''
	});

	useEffect(() => {
		setSucessSubmit(false);
	}, []);

	/*function timeOnPage(){
		endTime = new Date().getTime();
			var timeSpent = endTime - startTime;
		return timeSpent;
	}*/

	function handleInputChange(e) {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });

		if (e.target.value.length <= 0) {
			e.target.placeholder = "Preencha esse campo obrigatório.";
		}
	}

	async function handleSubmit(e) {
		e.preventDefault();
		const { name, email, whatsapp } = formData;

		const data = new FormData();
		data.append('name', name);
		data.append('email', email);
		data.append('whatsapp', whatsapp);

		var xhr = new XMLHttpRequest();
		var portalId = "6331207";
		var formGuid = "df4b5a24-5175-4f41-8b46-a3890893beac";
		var url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;


		var dataJSON = {
			"submittedAt": Date.now(),
			"fields": [
				{
					"name": "nome_completo",
					"value": name
				},
				{
					"name": "email",
					"value": email
				},
				{
					"name": "mobilephone",
					"value": whatsapp
				},
				{
					"name": "curso",
					"value": window.location.pathname
				},
				{
					"name": "url_forms",
					"value": window.location.pathname
				},
				{
					"name": "website",
					"value": window.location.href
				}
			],
			"legalConsentOptions": { // Include this object when GDPR options are enabled
				"consent": {
					"consentToProcess": true,
					"text": "I agree to allow Example Company to store and process my personal data.",
					"communications": [
						{
							"value": true,
							"subscriptionTypeId": 999,
							"text": "I agree to receive marketing communications from Example Company."
						}
					]
				}
			}
		}

		var final_JSON = JSON.stringify(dataJSON);

		xhr.open('POST', url);
		// Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
		xhr.setRequestHeader('Content-Type', 'application/json');

		xhr.onreadystatechange = function () {
			setSucessSubmit(true);
			if (xhr.readyState === 4 && xhr.status === 200) {
				sleep(2000).then(() => {
					//window.parent.location.href = "https://posead.institutosingularidades.edu.br/obrigado/";
					setSucessSubmit(false);
					//history.push(window.location.pathname.replace('Curso/','obrigado/').toString());
					window.location.pathname = "Obrigado/"
					//redirect pagina de obrigado
				}); // Returns a 200 response if the submission is successful.
			} else if (xhr.readyState === 4 && xhr.status === 400) {
				alert(xhr.responseText); // Returns a 400 error the submission is rejected.          
			} else if (xhr.readyState === 4 && xhr.status === 403) {
				alert(xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.           
			} else if (xhr.readyState === 4 && xhr.status === 404) {
				alert(xhr.responseText); //Returns a 404 error if the formGuid isn't found     
			}
		}

		// Sends the request 
		xhr.send(final_JSON);
	}

	function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}


	function styles() {
		var strg = "";
		props.isFullWidth === true ? strg += '' : strg += 'container ';
		props.isMain === true ? strg += 'Main ' : strg += '';
		return strg;
	}

	return (
		<div>

			<div className={sucessSubmit ? 'is-success' : 'hide'}>
				<div className="alert">
					<FiCheckCircle className="check-icon" />
					<h2>Cadastro concluído!</h2>
				</div>
			</div>
			<form id="form" className={styles()} onSubmit={handleSubmit} >
				<fieldset>
					<Heading as="h3" size="md" >Preencha seus dados abaixo.
					Nossa equipe de relacionamento
					entrará em contato em breve!</Heading>

					<Stack spacing="6">
						<div>
							<label htmlFor="name">Nome completo</label>
							<Input
								variant="filled"
								name="name"
								id="name"
								style={{ margin: '4px auto' }}
								onChange={handleInputChange}
								onBlur={handleInputChange}
								type="text"
								required
							/>
						</div>
						<div>
							<label htmlFor="email">Digite seu melhor e-mail</label>
							<Input
								variant="filled"
								name="email"
								id="email"
								style={{ margin: '4px auto' }}
								onChange={handleInputChange}
								onBlur={handleInputChange}
								type="email"
								required
							/>
						</div>
						<div>
							<label htmlFor="whatsapp">Celular com DDD</label>
							<Input
								variant="filled"
								name="whatsapp"
								id="whatsapp"
								style={{ margin: '4px auto' }}
								onChange={handleInputChange}
								onBlur={handleInputChange}
								type="tel"
								required
							/>
						</div>
						<div className="button-holder">
							<Button
								colorScheme="teal"
								isFullWidth
								onClick={handleSubmit}
								size="md"
							>
								Quero saber mais!
        			</Button>
						</div>
					</Stack>
				</fieldset>
			</form>
		</div>
	);
}

export default FormComponent;
