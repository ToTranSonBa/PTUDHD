//Layouts
import { HeaderOnly } from "../components/Layout"

// Pages
import Home from "../pages/Home"
import AboutMe from "../pages/AboutMe"
import Login from "../pages/Login"

// can see if not login
const publicRoutes=[
    {path: '/', component: Home},
    {path: '/aboutme', component: AboutMe},
    {path: '/login', component: Login, layout: HeaderOnly},
]


// can't see require login - if you have never logged in redirect to loginpage
const privateRoutes = []


export {
    publicRoutes, privateRoutes
}