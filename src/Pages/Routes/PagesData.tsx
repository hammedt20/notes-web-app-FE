import { routerType } from "../../types/router.types"
import LoginPage from "../LoginPage/LoginPage"
import { NotesPage } from "../NotesPage/NotesPage"
import { RegisterPage } from "../RegisterPage/RegisterPage"

const PagesData: routerType[] = [
    {
        path: "login",
        element: <LoginPage />,
        title: "login",
        requiresAuth: false,
    },
    {
        path: "signup",
        element: <RegisterPage />,
        title: "register",
        requiresAuth: false,
    },
    {
        path: "*",
        element: <NotesPage />,
        title: "home",
        requiresAuth: true,
    },
]

export default PagesData;