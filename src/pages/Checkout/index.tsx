import Form from './Form';
import ProductInfo from './ProductInfo';
import DashboardLayout from '@/layouts/DashboardLayout';

const Checkout = () => {
    return (
        <DashboardLayout title='Vegadic - CHECKOUT'>
            <div className='flex justify-center h-screen'>
                <div className='w-full desktop:w-container grid grid-cols-1 mb:grid-cols-2'>
                    <div className='h-full bg-[#f2f2f2] border-r border-[#dee2e6]'>
                        <ProductInfo />
                    </div>
                    <div className='h-full'>
                        <Form />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Checkout;
