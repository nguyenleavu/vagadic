import * as yup from 'yup';
import { PASSWORD_MIN_LENGTH } from '../constants';

export const AuthSchema = yup.object().shape({
    email: yup.string().email().required('Required field'),
    password: yup
        .string()
        .required('Required field')
        .min(PASSWORD_MIN_LENGTH, 'Password must be minimum. 8 characters'),
});
