import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '../domains/components/Header/Header';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<h1>main</h1>} path="/" />
      </Routes>
    </BrowserRouter>
  );
};
