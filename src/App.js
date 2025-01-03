import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footbar from './components/Footbar';
import Card from './components/Card';
import DetalleProp from './pages/DetallePropiedad';
import PropsVenta from './pages/PropsVenta';
import PropsAlquiler from './pages/PropsAlquiler';
import Contactanos from './pages/Contactanos';
import { InmobiliariaProvider } from './Context';
import ModalVideo from './components/ModalVideo';
import QuieroVenderPage from './pages/QuieroVender';
import FavoritosPage from './pages/Favoritos';
import PropsAlqTemp from './pages/AlqTemp';
import Emprendimineto from './pages/Emprendimientos';
import DetalleEmp from './pages/DetalleEmprendimiento';
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
          <Route path='/emprendimiento' element={<Emprendimineto/>} />
          <Route path='/detalleEmp/:id' element={<DetalleEmp/>} />
          <Route path='/contacto' element={<Contactanos />} />
          <Route path='/favoritos' element={<FavoritosPage />} />
          <Route path='*' element={<Home />} />

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
