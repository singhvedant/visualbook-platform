import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Dashboard from './pages/dashboard'
import Nav from './components/nav';

const App =  () => {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/ticket/:id" element={<Dashboard />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
