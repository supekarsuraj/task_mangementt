import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Task from './pages/Task';
import PageNotFound from './pages/PageNotFound';
import Protected from './pages/Protected';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Protected Component={Task} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/task" element={<Protected Component={Task} />} />
          
          <Route path="*" element={<PageNotFound />} /> {/* Fallback for 404 */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
