import All from './Component/All';
import Add from './Component/Add';
import Edit from './Component/Edit';
import NavBar from './Component/NavBar';
import NotFound from './Component/NotFound'; 
import Main from './Component/Main';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/all" element={<All />} />
        <Route path="/add" element={<Add/>} />
        <Route path="/edit/:id" element={<Edit/>} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;