import Button from '@/components/Button';
import { UserAuth } from '@/context/AuthContext';
import DashboardLayout from '@/layouts/DashboardLayout';
import { ROUTES } from '@/utils/routes';
import { isEmpty } from 'lodash';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Table from './Table';
import AddProduct from './Dialog/AddProduct';
import { useTranslation } from 'react-i18next';

const Profile = () => {
    const { user, logOut } = UserAuth();

    const { t } = useTranslation('profile')

    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate(ROUTES.LOGIN);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    const handleLogout = async () => {
        await logOut();
        toast.success('Log out success');
    };
    return (
        <DashboardLayout title='Vegadic - PROFILE'>
            <div className='flex flex-col items-center '>
                <div className='w-full desktop:w-container px-base'>
                    {!isEmpty(user) && (
                        <div className='w-full h-full'>
                            <div className=' h-full flex items-center justify-between'>
                                <h2 className='text-base mb:text-2xl text-primary font-medium'>
                                    {t('hello')} {user.email}!
                                </h2>
                                <Button onClick={handleLogout}>{t('log out')}</Button>
                            </div>
                        </div>
                    )}
                </div>
                <div className='w-full tablet:w-container mt-28'>
                    <div className='flex items-center justify-end mb-4'><AddProduct /></div>
                    <Table />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Profile;
