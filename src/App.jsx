import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Screen from './pages/Screen';
import Inbox from './pages/Inbox';
import Archive from './pages/Archive';
// import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to='screen' />} />
          <Route path='screen' element={<Screen />}>
            <Route path='inbox' element={<Inbox />} />
            <Route path='archive' element={<Archive />} />
          </Route>
          <Route path='*' element={<Screen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
