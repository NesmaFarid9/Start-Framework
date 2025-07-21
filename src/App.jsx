import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const router = createBrowserRouter(
    [
      {path: '', element: <Layout/>, children:[
        {index: true, element: <Home/>},
        {path: '/about', element: <About/>},
        {path: '/portfolio', element: <Portfolio/>},
        {path: '/contact', element: <Contact/>},
        {path: '/navbar', element: <Navbar/>},
        {path: '/footer', element: <Footer/>},
        {path: '*', element: <NotFound/>}
      ]}
    ]);


  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
