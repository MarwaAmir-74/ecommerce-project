import {LottieHandler}  from "./component/feedback/lottieHandler/lottieHandler";
import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout/mainLayout";
 import Error from "./pages/Error";
const Cart= lazy(() =>import("./pages/Cart"))
const ProfileLayout= lazy(() =>import("./component/ProfileLayout/ProfileLayout"))
const WishList = lazy (() =>import("./pages/WishList"))
const Account = lazy (() =>import("./pages/Account"))
const Categories = lazy(() =>import("./pages/Categories"))
const Products= lazy(() =>import("./pages/Products"))
const AboutUs= lazy(() =>import("./pages/AboutUs"))
const Login= lazy(() =>import("./pages/Login"))
const Register= lazy(() =>import("./pages/Register"))
const Orders= lazy(() =>import("./pages/Orders"))


export const router = createBrowserRouter([{
    path:'/',
    element:
    (<Suspense fallback={<LottieHandler type='loading' message="Loading please wait"/>}>
        <MainLayout/>
    </Suspense>
    ),
    errorElement:<Error/>,
    children:[
        {
            index:true,
            element:
            <Suspense fallback={<LottieHandler type='loading' message="Loading please wait"/>}>
                <Home/>
            </Suspense>
        },
        {
            path:'wishList',
            element:
            <Suspense fallback={<LottieHandler type='loading' message="Loading please wait"/>}>
                <WishList/>
            </Suspense>
        },
        {
            path:'cart',
            element:
            <Suspense fallback={<LottieHandler type='loading' message="Loading please wait"/>}>
                <Cart/>
            </Suspense>
        },
            {
                path:'about-us',
                element:
                <Suspense fallback={<LottieHandler type='loading' message="Loading please wait"/>}>
                    <AboutUs/>
                </Suspense>
            },
            {
                path:'categories',
                element:
                <Suspense fallback={<LottieHandler type='loading' message="Loading please wait"/>}>
                    <Categories/>
                </Suspense>
            },
        {
            path:'categories/products/:prefix',
            element:
            <Suspense fallback={<LottieHandler type='loading' message="Loading please wait"/>}>
                <Products/>
            </Suspense>,
            loader:({params})=>{
                if(
                    typeof params.prefix !== 'string' ||
                    !/^[a-z]+$/i.test(params.prefix)
                ){
                    throw new Response("bad request",{
                        statusText:'category not found',
                        status:400
                    })
                }
                return true
            }
        },
            {
                path:'login',
                element:
                <Suspense fallback={<LottieHandler type='loading' message="Loading please wait"/>}>
                    <Login/>
                </Suspense>
            },
            {
                path:'register',
                element:
                <Suspense fallback={<LottieHandler type='loading' message="Loading please wait"/>}>
                    <Register/>
                </Suspense>
            },
            {
                path:'profile',
                element:(
                <Suspense fallback={<LottieHandler type='loading' message="Loading please wait"/>}>
                    <ProfileLayout/>
                </Suspense>),
                children:[
                    {
                        index:true,
                        element:(
                            <Suspense fallback={<LottieHandler type='loading' message="Loading please wait"/>}>
                                <Account/>
                            </Suspense>
                        )
                    },{
                        path:'orders',
                        element:(
                            <Suspense fallback={<LottieHandler type='loading' message="Loading please wait"/>}>
                                <Orders/>
                            </Suspense>
                        )
                    }
                ]
            },
    ]
}]) 
    