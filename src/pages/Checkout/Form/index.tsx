import Button from '@/components/Button';
import Input from '@/components/Input';
import { getFormikErrorField } from '@/utils/helper';
import { ROUTES } from '@/utils/routes';
import { checkoutSchema } from '@/utils/validations/checkoutShema';
import { useFormik } from 'formik';
import { toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const navigate = useNavigate();

    const { t } = useTranslation('checkout');

    const formik = useFormik({
        initialValues: {
            email: '',
            country: '',
            name: '',
            address: '',
            phone: '',
        },
        validationSchema: checkoutSchema,
        onSubmit: async (values: any) => {
            toast.success('Checkout success!');
            navigate(ROUTES.HOME);
        },
    });

    const setFieldValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        formik.setFieldValue(name, value);
    };
    return (
        <form className='p-14' onSubmit={formik.handleSubmit}>
            <h3 className='text-3xl font-base'>{t('title')}</h3>
            <div className='mt-7'>
                <label className='block text-[17px] my-3'>{t('contact')}</label>
                <Input
                    name='email'
                    placeholder='Email'
                    error={getFormikErrorField(formik, 'email')}
                    onChange={setFieldValue}
                />
            </div>
            <div className='Shipping address'>
                <label className='block text-[17px] my-3'>
                    {t('shipping address')}
                </label>
                <Input
                    placeholder={t('country')}
                    error={getFormikErrorField(formik, 'country')}
                    onChange={setFieldValue}
                    name='country'
                />
                <Input
                    placeholder={t('name')}
                    error={getFormikErrorField(formik, 'name')}
                    onChange={setFieldValue}
                    name='name'
                />
                <Input
                    placeholder={t('address')}
                    error={getFormikErrorField(formik, 'address')}
                    onChange={setFieldValue}
                    name='address'
                />
                <Input
                    placeholder={t('phone')}
                    error={getFormikErrorField(formik, 'phone')}
                    onChange={setFieldValue}
                    name='phone'
                />
            </div>
            <div className='flex justify-end mt-10'>
                <Button type='submit'>{t('continue')}</Button>
            </div>
        </form>
    );
};

export default Form;
