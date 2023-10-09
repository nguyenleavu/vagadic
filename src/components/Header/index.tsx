import { images } from '@/assets/images';
import Navbar from './NavBar';
import Action from './Action';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/utils/routes';

const Header = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className='w-full desktop:w-container py-[25px] px-base flex items-center justify-between'>
                <Navbar />
                <Link to={ROUTES.HOME} className='w-[100px] desktop:w-[140px]'>
                    <img src={images.logo} alt='logo' />
                </Link>
                <Action />
            </div>
        </div>
    );
};

export default Header;
