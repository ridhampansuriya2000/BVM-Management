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
function App(){
    return (
        <>
            <Routes>
                <Route path={'/'} element={ <Login/> } />
                <Route path={'/forgotpassword'} element={ <ForgotPassword/> } />
                <Route path={'/checkemail'} element={ <CheckEmail/> } />
                <Route path={'/newpassword'} element={ <NewPassword/> } />
                <Route path={'/view'} element={ <View/> } />
            </Routes>
        </>
    );
}

export default App;
