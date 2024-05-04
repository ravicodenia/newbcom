import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Partners from "./components/Partners";
import Userside from "./components/Userside";
import Addpartnerform from "./components/Partners/Addpartnerform"

import Partnerdetails from "./components/Partners/Partnerdetails"
import Signup from "./components/Singup";
import Login from "./components/Login";
import Footer from "./components/footer";

import Header from "./components/Header";


import Userlogin from "./components/Userside/Login";
import UserRegister from "./components/Userside/UserRegister";
import Userassessment from "./components/Userside/Assessment";
import Userassessments from "./components/Userside/Assessments";

import Companydetails from "./components/Partners/companydetails";

import EditPage from "./components/Userside/UserD/Edit";
import GlobalFooter from "./components/footer/globalFooter";



import UserD from "./components/Userside/UserD";

const Routing = () => {
	const user = localStorage.getItem("token");

	const user1 = localStorage.getItem('token1');
	return ( 
		<Routes>
			{user && <Route path="/" exact element={<Login />} />}
			<Route path="/login" exact element={<Login />} />
			// <Route path="/signup" exact element={<Signup />} />
			<Route path="/" element={<Navigate replace to="/login" />} />

			{user && <Route path="/partners" exact element={<Partners />} />}
			{user && <Route path="/partners/add-partnerform" exact element={<Addpartnerform />} />}
			{user && <Route path="/partners/partnerdetails/:val" exact element={<Partnerdetails />} />}
			{user && <Route path="/partners/companydetails" exact element={<Companydetails />} />}

			{user1 && <Route path="/landingpage/assessments" exact element={<Userassessments />} />}
			{<Route path="/landingpage/:val" exact element={<Userside />} />}
			{<Route path="/landingpage/login" exact element={<Userlogin />} />}
			{<Route path="/landingpage/register/:val" exact element={<UserRegister />} />}
			{user1 && <Route path="/landingpage/assessment" exact element={<Userassessment />} />}
			{user && <Route path="/landingpage/userdetails" exact element={<UserD />} />}
			{user && <Route path="/edit/:id"  exact element={<EditPage />} />}


		</Routes>
	);
}

const App = () => {
	return (
		<>
			<Header />
			<Routing />
			<Footer />
			<GlobalFooter />

		</>
	);
}

export default App;
