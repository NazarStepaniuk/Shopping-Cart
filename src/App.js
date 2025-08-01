import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home.jsx";
import Cart from "./pages/cart.jsx";
import Header from './components/header/index.jsx';

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/cart' element={<Cart/>}/>
            </Routes>
        </div>
    );
}

export default App;