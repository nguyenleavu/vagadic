import { images } from '@/assets/images';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { UserAuth } from '@/context/AuthContext';
import NoLayout from '@/layouts/NoLayout';
import { AuthType } from '@/type';
import { getFormikErrorField } from '@/utils/helper';
import { ROUTES } from '@/utils/routes';
import { AuthSchema } from '@/utils/validations/authSchema';
import { useFormik } from 'formik';
import { toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const { logIn } = UserAuth();

    const { t } = useTranslation('auth');

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: AuthSchema,
        onSubmit: async (values: AuthType) => {
            try {
                await logIn(values);
                navigate(ROUTES.HOME);
                toast.success('Login success!');
            } catch (error) {
                toast.error('Login fail!');
            }
        },
    });

    const setFieldValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        formik.setFieldValue(name, value);
    };

    return (
        <NoLayout title='Vegadic - LOGIN'>
            <div className='fixed inset-0 flex items-center justify-center bg-[#f4f4f4] w-full'>
                <div className='w-full h-full tablet:w-[500px] tablet:h-[700px] bg-white p-[50px] flex items-center flex-col'>
                    <div className='border-b border-[#ccc] w-full flex items-center justify-center'>
                        <div className='w-[160px] pb-5 '>
                            <img src={images.logo} alt='logo' />
                        </div>
                    </div>
                    <h2 className='pt-5 pb-2 text-xl text-[#111111]'>
                        {t('Great to have you back!')}
                    </h2>
                    <form className='w-full' onSubmit={formik.handleSubmit}>
                        <Input
                            name='email'
                            placeholder={t('email')}
                            onChange={setFieldValue}
                            error={getFormikErrorField(formik, 'email')}
                        />
                        <Input
                            name='password'
                            placeholder={t('password')}
                            type='password'
                            onChange={setFieldValue}
                            error={getFormikErrorField(formik, 'password')}
                        />
                        <p className='text-[#c5c4c4] text-sm mt-4 mb-5 hover:text-primary transition-all cursor-pointer'>
                            {t('forgot your password')}
                        </p>
                        <Button size='large' type='submit'>
                            {t('log in')}
                        </Button>
                        <div className='flex items-center justify-center p-[10px] mt-[30px] bg-[#f2f2f2]'>
                            <p className='text-[#212529] text-sm mr-2'>
                                {t('don’t have an account?')}
                            </p>
                            <Link
                                to={ROUTES.REGISTER}
                                className='text-sm text-[#c5c4c4] hover:text-primary transition-all'
                            >
                                {t('Register now')}
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </NoLayout>
    );
};

export default Login;
