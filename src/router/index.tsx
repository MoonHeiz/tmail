import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '../domains/components/Header/Header';
import { Messages } from '../pages/Messages/Messages';
import { Message } from '../pages/Message/Message';
import { CSC } from '../styles/common';
import { Source } from '../pages/Source/Source';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <CSC.PageContainer>
        <Routes>
          <Route path="/" element={<Messages />} />
          <Route path="/message/:messageId" element={<Message />} />
          <Route path="/source/:sourceId" element={<Source />} />
        </Routes>
      </CSC.PageContainer>
    </BrowserRouter>
  );
};
