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

//
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/aboutme', component: AboutMe },
    { path: '/login', component: Login, layout: HeaderOnly },
    { path: '/signup', component: SignUp, layout: HeaderOnly },
<<<<<<< Updated upstream
    { path: '/service', component: Services, layout: HeaderOnly },
    { path: '/service/:id', component: Product, layout: ProductIntroduce },
    { path: '/register/:id', component: Register, layout: RegisterInsurance },
=======
    { path: '/service', component: Services },
    { path: '/service/abc', component: Product },
    { path: '/register/abc', component: Register },
>>>>>>> Stashed changes
    { path: '/account', component: Account },
];

//
const privateRoutes = [];

export { publicRoutes, privateRoutes };
