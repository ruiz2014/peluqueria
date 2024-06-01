import logo from './logo.svg';
import './App.css';

import CompShowBlogs from './blog/ShowBlog';
import CompCreateBlogs from './blog/CreateBlog';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CompEditBlog from './blog/EditBlog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <CompShowBlogs /> }/>
          <Route path='/create' element={ <CompCreateBlogs /> }/>
          <Route path='/edit/:id' element={ <CompEditBlog /> }/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
