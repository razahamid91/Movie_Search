import "./App.css";
import { 
   createBrowserRouter, RouterProvider 
  } from "react-router-dom";
import Home from "./components/Home";
import SearchResult from "./components/SearchResult";
import Movie from "./components/Movie";
import { useEffect,useState } from "react";
import Counter from "./components/Counter";
import Actor from "./components/Actor";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: '/search/:movie',
      element:<SearchResult/>
    },
    {
      path: '/movie/:movieId',
      element:<Movie/>
    },
    {
      path: '/counter',
      element:<Counter/>
    },
    {
      path: '/actor/:actorId',
      element:<Actor/>
    }
  ]);
  return (
    <div>
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;