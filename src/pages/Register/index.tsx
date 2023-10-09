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

const Register = () => {
    const navigate = useNavigate();
    const { register } = UserAuth();

    const { t } = useTranslation('auth');

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: AuthSchema,
        onSubmit: async (values: AuthType) => {
            try {
                await register(values);
                navigate(ROUTES.LOGIN);
                toast.success('Register success');
            } catch (error) {
                toast.error('Register Fail');
            }
        },
    });

    const setFieldValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        formik.setFieldValue(name, value);
    };

    return (
        <NoLayout title='Vegadic - REGISTER'>
            <div className='fixed inset-0 flex items-center justify-center bg-[#f4f4f4] w-full'>
                <div className='w-[500px] h-[600px] bg-white p-[50px] flex items-center flex-col'>
                    <h2 className='text-base mb-4 font-medium tracking-[2px]'>
                        {t('register')}
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

                        <Button size='large' type='submit'>
                            {t('register')}
                        </Button>

                        <Link
                            to={ROUTES.LOGIN}
                            className='p-[10px] flex items-center justify-center bg-[#f2f2f2] mt-[30px] font-medium text-sm text-[#111111] hover:text-primary transition-all'
                        >
                            {t('back to login')}
                        </Link>
                    </form>
                </div>
            </div>
        </NoLayout>
    );
};

export default Register;
