import { images } from '@/assets/images';
import navbarMock from '@/assets/mock/navbar.json';
import { useOutsideClick } from '@/hooks/useOutsideClick ';
import { ROUTES } from '@/utils/routes';
import { map } from 'lodash';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [openSidebar, setOpenSidebar] = useState(false);

    const { t } = useTranslation('header');

    const ref = useRef<HTMLInputElement | null>(null);
    const sidebarRef = useOutsideClick(() => {
        setOpenSidebar(false);
    });

    const handleOpenSidebar = () => {
        setOpenSidebar(true);
    };
    useEffect(() => {
        if (ref.current) {
            openSidebar
                ? (ref.current.style.transform = 'translateX(0)')
                : (ref.current.style.transform = 'translateX(-100%)');
        }
    }, [openSidebar]);

    return (
        <>
            <ul className='hidden desktop:flex items-center flex-1'>
                {map(navbarMock, (item) => (
                    <li key={item.id} className='px-5 first:pl-0 group '>
                        <Link to={item.path} className='relative'>
                            <span className='text-base font-medium uppercase group-hover:text-primary duration-300'>
                                {t(item.title)}
                            </span>
                            <div className='absolute h-[1px] w-0 group-hover:w-full transition-all bg-primary duration-300'></div>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className='desktop:hidden flex-1 flex items-start w-fit group'>
                <button onClick={handleOpenSidebar}>
                    <i className='fa-regular fa-bars-staggered text-3xl'></i>
                </button>

                <div
                    ref={ref}
                    className='fixed inset-0  z-50 -translate-x-full transition-all duration-300'
                >
                    <div className='w-4/5 bg-white h-full' ref={sidebarRef}>
                        <div className='flex items-center justify-center'>
                            <Link
                                to={ROUTES.HOME}
                                className=' w-[200px] px-base py-10'
                            >
                                <img src={images.logo} alt='logo' />
                            </Link>
                        </div>
                        <ul className=' flex flex-col'>
                            {map(navbarMock, (nav) => (
                                <li
                                    key={nav.id}
                                    className='border-b border-[#ededed] flex items-center justify-between'
                                >
                                    <Link to={nav.path} className='flex-1'>
                                        <span className='text-base font-medium uppercase block  p-base '>
                                            {t(nav.title)}
                                        </span>
                                    </Link>
                                    <div className='h-full w-14 border-l border-[#ededed] flex items-center justify-center'>
                                        <i className='fa-solid fa-chevron-right'></i>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {openSidebar && (
                    <div className='bg-[#000000c4] fixed inset-0 z-30'></div>
                )}
            </div>
        </>
    );
};

export default Navbar;
