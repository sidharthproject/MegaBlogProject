import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthLayOut } from './Components/index.js'
import Home from './pages/Home.jsx'
import SignUp from './pages/SignUp'
import AllPosts from './pages/AllPosts.jsx'
import AddPost from './pages/AddPost.jsx'
import EditPosts from './pages/EditPosts.jsx'
import Post from './pages/Post.jsx'
import Login from './Components/Login.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {

        path:"/",
        element:<Home/>
      },
      {
        path: "/login",
        element: (
            <AuthLayOut authentication={false}>
                <Login/>
            </AuthLayOut>
        ),
    },
    {
        path: "/signup",
        element: (
            <AuthLayOut authentication={false}>
                <SignUp/>
            </AuthLayOut>
        ),
    },
    {
        path: "/all-posts",
        element: (
            <AuthLayOut authentication>
                {" "}
                <AllPosts/>
            </AuthLayOut>
        ),
    },
    {
        path: "/add-post",
        element: (
            <AuthLayOut authentication>
                {" "}
                <AddPost/>
            </AuthLayOut>
        ),
    },
    {
        path: "/edit-post/:slug",
        element: (
            <AuthLayOut authentication>
                {" "}
                <EditPosts/>
            </AuthLayOut>
        ),
    },
    {
        path: "/post/:slug",
        element: <Post/>,
    },
],
    

}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>

  <RouterProvider router={router}/>

  </Provider>,
  </React.StrictMode>
)
