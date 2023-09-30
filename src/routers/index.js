import Home from "~/pages/Home"
import Login from "~/pages/Login"

const publicRoutes = [
    //Không cần đăng nhập vẫn xem được

    {
        path: "/", component: Home
    },

    {
        path: "/Login", component: Login
    }
]

const privateRoutes = [
    //Phải đăng nhập mới xem được
]

export { publicRoutes, privateRoutes } 