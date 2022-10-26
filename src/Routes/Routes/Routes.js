import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category";
import Course from "../../Pages/course/Course";
import Courses from "../../Pages/Courses/Courses";
import Faq from "../../Pages/Faq/Faq";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import Home from "../../Pages/Shared/Home/Home";
import pageNotFoundd from "../../Pages/pageNotFoundd/pageNotFoundd";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/courses/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)

            },
            {
                path: '/course/:id',
                element: <Course></Course>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },

            {
                path: '/register',
                element: <Register></Register>
            }
        ]

    },
    {
        path: '*',
        element: <div className=" container text-center mt-5">
            <h1>404 PAGE NOT FOUND</h1>
        </div>
    }

])