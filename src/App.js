import { Routes, Route } from 'react-router-dom';

import Inflab from './components/Inflab';
import Header from './components/Header';
import MainPage from './components/main-page/MainPage';
import Footer from './components/footer/Footer';
import LectureDetailPage from './components/lecture-detail-page/LectureDetailPage';

function App() {
  return (
    <div className="App">
      <Inflab />
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route
          path="/lecture/:lecture_id"
          element={<LectureDetailPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
