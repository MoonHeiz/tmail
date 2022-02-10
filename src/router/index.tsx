import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '../domains/components/Header/Header';
import { Messages } from '../domains/components/Messages/Messages';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Messages />} path="/" />
      </Routes>
    </BrowserRouter>
  );
};
