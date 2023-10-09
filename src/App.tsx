import { ROUTES } from '@/utils/routes';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Loading from './components/Loading';

const Product = lazy(() => import('./pages/Product'))

function App() {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.PRODUCTS} element={<Products />} />
            <Route path={ROUTES.PRODUCT} element={<Suspense fallback={<Loading />}><Product /></Suspense>} />
            <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.REGISTER} element={<Register />} />
            <Route path={ROUTES.CART} element={<Cart />} />
            <Route path={ROUTES.CHECKOUT} element={<Checkout />} />
            <Route path={ROUTES.PROFILE} element={<Profile />} />
        </Routes>
    );
}

export default App;
