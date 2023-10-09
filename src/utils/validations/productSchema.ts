import * as yup from 'yup';

export const productSchema = yup.object().shape({
    name: yup.string().required('Required field'),
    description: yup.string().required('Required field'),
    categories: yup.string().required('Required field'),
    price: yup.number().required('Required field'),
});
