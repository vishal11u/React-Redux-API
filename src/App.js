import { Routes, Route } from 'react-router-dom';
import ReduxNavbar from './Reduxtoolkit/Shopping/ReduxNavbar';
import CardRedux from './Reduxtoolkit/Shopping/CardRedux';
import ReduxShoppingCart from './Reduxtoolkit/Shopping/ReduxShoppingCart'

function App() {
  return (
    <div >
      <ReduxNavbar />
      <Routes>
        <Route index element={<CardRedux />} />
        <Route path='/shopping' element={< ReduxShoppingCart />} />
      </Routes>
    </div>
  );
}

export default App;
