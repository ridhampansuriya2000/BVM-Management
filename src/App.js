import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";

//pages
import View from "./View";
import Login from "./Pages/Login/Login";

function App(){
    return (
        <>
            <Routes>
                <Route path={'/'} element={ <Login/> } />
                <Route path={'/view'} element={ <View/> } />
            </Routes>
        </>
    );
}

export default App;
