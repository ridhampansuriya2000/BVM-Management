import logo from './logo.svg';
import {Routes, Route} from "react-router-dom";

//pages
import View from "./View";
import Login from "./Pages/Login/Login";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import CheckEmail from "./Pages/CheckEmail/CheckEmail";
import NewPassword from "./Pages/NewPassword/NewPassword";

//css
import './App.css';
import Layout from "./View/Layout";

function App(){
    return (
        <>
            <Routes>
                <Route path={'/'} element={ <Layout/> } />

                <Route path={'/login'} element={ <Login/> } />
                <Route path={'/forgotpassword'} element={ <ForgotPassword/> } />
                <Route path={'/checkemail'} element={ <CheckEmail/> } />
                <Route path={'/newpassword'} element={ <NewPassword/> } />

                <Route path={'/view'} element={ <View/> } />
            </Routes>
        </>
    );
}

export default App;
