import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import List from './Pages/List/List';
import Hotel from './Pages/Hotel/Hotel';
import Home from './Pages/Home/Home';


function App() {
    return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/hotels" element={<List/>}/>
            <Route path="/hotels/:id" element={<Hotel/>}/>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
