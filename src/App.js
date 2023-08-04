import logo from './logo.svg';
import './App.css';
import View from "./View";

import {Routes, Route} from "react-router-dom";

function App(){
    return (
        <>
            <Routes>
                <Route path={'/'} element={ <View/> } />
            </Routes>
        </>
    );
}

export default App;
