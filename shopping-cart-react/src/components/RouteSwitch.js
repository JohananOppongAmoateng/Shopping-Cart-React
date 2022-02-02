
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Cart from "./Cart"
import App from '../App';

export default function RouteSwitch() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>

        </BrowserRouter>
    )
}