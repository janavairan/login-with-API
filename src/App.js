import Signin from './components/sign_in';
import Signup from './components/sign_up';
import Dashboard from './components/dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Posts from './components/posts';
import PreviewPage from './components/previewpage'



function App() {

  return (
    <BrowserRouter>
      <div>

        <Routes>
          <Route path='/' element={<Signup />}></Route>
          <Route path='/signin' element={<Signin />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/posts' element={<Posts />}></Route>
          {/* <Route path='/previewpage/id' element={<Previewpage />}></Route> */}
          <Route path='/back' element={<Posts />}></Route>
          <Route path="/previewpage/:id" element={<PreviewPage />} />


        </Routes>





        {/* <Signin /> */}
      </div>
    </BrowserRouter>

  );
}

export default App;
