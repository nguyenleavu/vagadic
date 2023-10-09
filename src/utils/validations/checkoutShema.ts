import * as yup from 'yup';
import { PHONE_LENGTH } from '../constants';

export const checkoutSchema = yup.object().shape({
    email: yup.string().email().required('Required field'),
    country: yup.string().required('Required field'),
    name: yup.string().required('Required field'),
    address: yup.string().required('Required field'),
    phone: yup
        .string()
        .required('Required field')
        .min(PHONE_LENGTH, `Phone must ${PHONE_LENGTH} character`)
        .max(PHONE_LENGTH, `Phone must ${PHONE_LENGTH} character`),
});
