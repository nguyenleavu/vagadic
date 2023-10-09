import { ROUTES } from '@/utils/routes';
import { Link } from 'react-router-dom';

interface BreadcrumbProps {
    router: string;
}

const Breadcrumb = ({ router }: BreadcrumbProps) => {
    return (
        <div className='flex justify-center'>
            <div className='w-full desktop:w-container px-base'>
                <div className='flex items-center pb-[30px] pt-2'>
                    <Link
                        to={ROUTES.HOME}
                        className='hover:text-primary text-base'
                    >
                        Home
                    </Link>
                    <i className='fa-solid fa-angle-right text-xs px-3'></i>
                    <span className='text-primary font-medium text-base'>
                        {router}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;
