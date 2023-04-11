import React from "react"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Add from "./pages/add/Add";
import Order from "./pages/orders/Order"
import MyGigs from "./pages/myGigs/MyGigs"

import{
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

function App() {
  const Layout =()=>{
    return(
      <div className="app">
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
      
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/gig/:id",
          element:<Gig/>
        },
        {
          path:"/gigs",
          element:<Gigs/>
        },
        {
          path:"/myGigs",
          element:<MyGigs/>
        },
        {
          path:"/orders",
          element:<Order/>
        },
        {
          path:"/add",
          element:<Add/>
        }
      ]
    },
  ]);

  return (
    <div>
       <RouterProvider router={router} />
    </div>
  )
}

export default App
