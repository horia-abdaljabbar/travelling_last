
import './App.css'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
//import NavBar from './Components/NavBar/NavBar'
import Login from './Pages/Login/Login';
import Root from './Routes/Root';
import Register from './Pages/Register/Register';
import SendCode from './Pages/SendCode/SendCode';
import ForgetPassword from './Pages/ForgetPassword/ForgetPassword'
import ResetPassword from './Pages/ResetPassword/ResetPassword'
import SendCodeForForgetPassword from './Pages/SendCodeForForgetPassword/SendCodeForForgetPassword';
import Home from './Pages/Home/Home';
import HomeApp from './Pages/HomeApp'
// import  LanguageContextProvider  from './components/context/Language.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: 
          <HomeApp />,
        },
        {
          path: "/Home",
          element:
             <HomeApp />
        },
      
        {
          path: "/Login",
          element: 
            <Login />
        
        },
        {
          path: "/Register",
          element: 
             <Register />
        },

        {
          path: "/SendCode",
          element: 
             <SendCode />
        },

        {
          path: "/ForgetPassword",
          element: 
             <ForgetPassword />
        },

         {
          path: "/ResetPassword",
          element: 
             <ResetPassword />
        },

        {
          path: "/SendCodeForForgetPassword",
          element: 
             <SendCodeForForgetPassword />
        },


        

        
      

      
      ],
    },
  ]);
  return (
    <>

   <RouterProvider router={router} />

    </>
  )
}

export default App
