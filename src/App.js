import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import styled from 'styled-components';

import MobileNavBar from './components/MobileNavBar';
import Inflab from './components/Inflab';
import Header from './components/header/Header';
import MainPage from './pages/MainPage';
import Footer from './components/footer/Footer';
import LectureDetailPage from './pages/LectureDetailPage';
import NotFound from './pages/NotFound';
import CoursesPage from './pages/CoursesPage';
import DashBoardPage from './pages/my-pages/DashBoardPage';
import LikePage from './pages/my-pages/LikePage';
import CartPage from './pages/my-pages/CartPage';

function App() {
  const [isNotFound, setIsNotFound] = useState(false);

  return (
    <BrowserRouter>
      <MobileNavWrapper hidden={isNotFound}>
        <MobileNavBar />
      </MobileNavWrapper>
      <Inflab isNotFound={isNotFound} />
      <Header isNotFound={isNotFound} />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/lecture/:title" element={<LectureDetailPage />}></Route>
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/account/dashboard" element={<DashBoardPage />} />
        <Route path="/likes" element={<LikePage />} />
        <Route path="/carts" element={<CartPage />} />

        <Route path="/*" element={<NotFound setIsNotFound={setIsNotFound} />} />
      </Routes>
      <Footer isNotFound={isNotFound} />
    </BrowserRouter>
  );
}

export default App;

const MobileNavWrapper = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: ${props => (props.hidden ? 'none' : 'block')};
  }
`;
