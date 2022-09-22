import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Inflab from './components/Inflab';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import Footer from './components/footer/Footer';
import LectureDetailPage from './pages/LectureDetailPage';
import NotFound from './pages/NotFound';
import Courses from './pages/Courses';

function App() {
  const [isNotFound, setIsNotFound] = useState(false);

  return (
    <BrowserRouter>
      <Inflab isNotFound={isNotFound} />
      <Header isNotFound={isNotFound} />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/lecture/:title" element={<LectureDetailPage />}></Route>
        <Route path="/courses" element={<Courses />} />

        <Route path="/*" element={<NotFound setIsNotFound={setIsNotFound} />} />
      </Routes>
      <Footer isNotFound={isNotFound} />
    </BrowserRouter>
  );
}

export default App;
