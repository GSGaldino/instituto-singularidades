import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect, Router } from 'react-router'
import { ConnectedRouter } from "react-router-redux";

import { history } from './history';
import Holder from '../pages/holder';
import SignIn from '../pages/SignIn';
import ToggleCMS from '../pages/ToggleCMS';
import Home from '../pages/home';
import { Protected, authRoutes, Unauthenticated, PasswordResetForm } from 'react-serverless-auth';

import {
	ConfirmationForm,
	PasswordResetRequestForm,
	PasswordResetConfirmForm,
	SignInForm,
	SignUpForm,
} from "../components";

const listCursos = lazy(() => import('../pages/listCursos'))
const ListProfessores = lazy(() => import('../pages/listProfessores'))
const Professor = lazy(() => import('../pages/Professor'))
const Curso = lazy(() => import('../pages/Curso'))
const Webinar = lazy(() => import('../pages/Webinar'))
const WebnarTmp01 = lazy(() => import('../pages/WebnarTmp01'))
const WebnarTmp02 = lazy(() => import('../pages/WebnarTmp02'))
const PSPTmp01 = lazy(() => import('../pages/PSPTmp01'))
const PSPTmp02 = lazy(() => import('../pages/PSPTmp02'))
const ThankyouPage = lazy(() => import('../pages/ThankyouPage'))
const NotFound = lazy(() => import('../pages/notFound'))

export default function Routes(props) {
	const AuthRoute = ({ path, children }) => (
		<Route exact path={path}>
			<Unauthenticated component={<Redirect to={'/'} />} loadingComponent={'Loading...'}>{children}</Unauthenticated>
		</Route>
	);

	return (
		<ConnectedRouter history={history}>
			<Switch>

				<AuthRoute path={authRoutes.signIn}><SignInForm /></AuthRoute>
				<AuthRoute path={authRoutes.confirm}><ConfirmationForm noEmail={<Redirect to={'/'} />} /></AuthRoute>
				<Route exact path="/portalalumia"><Protected component={SignIn}><ToggleCMS /></Protected></Route>

				<Suspense fallback={Holder}>

					<Route component={Home} exact path="/" />
					<Route component={listCursos} exact path="/Cursos" />
					<Route component={ListProfessores} exact path="/Professores" />
					<Route component={Curso} exact path="/Curso/:nome" />
					<Route component={Professor} exact path="/Prof/:nome" />
					<Route component={ThankyouPage} exact path="/Obrigado" />
					<Route component={WebnarTmp01} path="/webinar-o-papel-do-psicopedagogo-na-escola-e-na-clinica/" exact />
					<Route component={WebnarTmp02} path="/webinar-Metodologias-Inov-Ativas-e-STEAM-no-ensino-Hibrido" exact />
					<Route component={PSPTmp01} path="/escola-transformadora/" exact />
					<Route component={PSPTmp02} path="/psicopedagogia/" exact />
					<Route component={Webinar} exact path="/Webinar/:nome" />


				</Suspense>

			</Switch>
		</ConnectedRouter>
	)
}
