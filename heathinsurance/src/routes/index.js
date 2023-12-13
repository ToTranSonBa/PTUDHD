//Layouts
import { HeaderOnly } from '../components/Layout';
import { ProductIntroduce } from '../components/Layout';
import { RegisterInsurance } from '../components/Layout';

// Pages
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Services from '../pages/Services';
import Product from '../pages/Product';
import Register from '../pages/Register';
import Account from '../pages/Account';

// can see if not login
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/aboutme', component: AboutMe },
    { path: '/login', component: Login, layout: HeaderOnly },
    { path: '/signup', component: SignUp, layout: HeaderOnly },
    { path: '/service', component: Services, layout: HeaderOnly },
    { path: '/service/abc', component: Product, layout: ProductIntroduce },
    { path: '/register/abc', component: Register, layout: RegisterInsurance },
    { path: '/account', component: Account },
];

// can't see require login - if you have never logged in redirect to loginpage
const privateRoutes = [];

export { publicRoutes, privateRoutes };
