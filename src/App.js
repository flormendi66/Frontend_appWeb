import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footbar from './components/Footbar';
import Card from './components/Card';
import DetalleProp from './pages/DetallePropiedad';
import PropsVenta from './pages/PropsVenta';
import PropsAlquiler from './pages/PropsAlquiler';
import Contactanos from './pages/Contactanos';
import Nosotros from './pages/Nosotros';
import { InmobiliariaProvider } from './Context';
import ModalVideo from './components/ModalVideo';
import QuieroVenderPage from './pages/QuieroVender';
import FavoritosPage from './pages/Favoritos';
import PropsAlqTemp from './pages/AlqTemp';
import './App.css';

function App() {
  return (
    <InmobiliariaProvider>
      <div className="App">
        {/*--------- navbar------ */}
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detalle/:id' element={<DetalleProp />} />
          <Route path='/venta' element={<PropsVenta />} />
          <Route path='/alquiler' element={<PropsAlquiler />} />
          <Route path='/vender' element={<QuieroVenderPage/>} />
          <Route path='/alqTemp' element={<PropsAlqTemp />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/contacto' element={<Contactanos />} />
          <Route path='/favoritos' element={<FavoritosPage />} />

          {/* rutas para el desarrollador */}
          <Route path='/card' element={<Card />} />
          <Route path='/modalVideo' element={<ModalVideo/>} />
        </Routes>

        <Footbar />
      </div>
    </InmobiliariaProvider>
  );
}

export default App;
