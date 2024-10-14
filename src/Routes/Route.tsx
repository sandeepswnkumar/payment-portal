import TwoPart from "@/components/Common/TwoPart";
import Layout from "@/components/Layout";
import Dashboard from "@/pages/Dashboard/Dashboard";
import NotFound404 from "@/pages/Error/NotFound404";
import ChangePassword from "@/pages/ForgetPassword/ChangePassword";
import ForgetPassword from "@/pages/ForgetPassword/ForgetPassword";
import ForgetPasswordConfirmation from "@/pages/ForgetPassword/ForgetPasswordConfirmation";
import Login from "@/pages/Login/Login";
import AccountDetail from "@/pages/MyProfile/AccountDetails/AccountDetail";
import Preferences from "@/pages/MyProfile/Preferences/Preferences";
import Users from "@/pages/MyProfile/Users/Users";
import OtpValidation from "@/pages/Register/OtpValidation";
import Register from "@/pages/Register/Register";
import Setting from "@/pages/Setttings/Setting";
import Payment from "@/pages/Wallets/Payments/Payment";
import WalletListing from "@/pages/Wallets/WalletListing/WalletListing";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";


const route = [
    {
        path: "/",
        element: <Layout />,
        children :[
            {
                path: "",
                element: <Dashboard />,
            },
            {
                path: "account-detail",
                element: <AccountDetail />,
            },
            {
                path: "preference",
                element: <Preferences />,
            },
            {
                path: "user",
                element: <Users />,
            },
            {
                path: "wallets",
                element: <WalletListing />,
            },
            {
                path: "payments",
                element: <Payment />,
            },
            {
                path: "settings",
                element: <Setting />,
            }
        ]
    },
    {
        path: "login",
        element: <Login />,
    },
    {
        path: "register",
        element: <Register />,
    },
    {
        path: "forget-password",
        element: <ForgetPassword />,
    },
    {
        path: "forget-confirmation",
        element: <ForgetPasswordConfirmation />,
    },
    {
        path: "change-password",
        element: <ChangePassword />,
    },
    {
        path: "otp-confirmation",
        element: <OtpValidation />,
    },
    {
        path: "information",
        element: <TwoPart />,
    },
    {
        path: "*",
        element: <NotFound404 />,
    }
]


const router = createBrowserRouter(route);

const Route = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Route