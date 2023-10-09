export const getFormikErrorField = (form: any, field: string) =>
    !!form.errors[field] && !!form.touched[field] ? form.errors[field] : null;

export const formatNumber = (number: number, currency: string) => {
    return (
        currency +
        Number(number).toFixed(2).replace(/./g, (c, i, a) => {
            return i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? ',' + c : c;
        })
    );
};
