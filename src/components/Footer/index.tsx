import { images } from '@/assets/images';
import footer from '@/assets/mock/footer.json';
import { map } from 'lodash';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation('footer')

    return (
        <div className='flex justify-center bg-[#f4f4f4]'>
            <div className='w-full desktop:w-container flex flex-col desktop:flex-row desktop:items-center'>
                <div className='desktop:flex-1 px-base flex justify-center'>
                    <div className='pt-[50px] pb-10 w-3/4 flex flex-col items-center'>
                        <div className='w-[200px]'>
                            <img src={images.logo} alt='logo' />
                        </div>
                        <p className='text-gray66 text-center mt-2'>
                            {t("Subscribe our newsletter and get discount 30% off")}
                        </p>
                    </div>
                </div>
                <div className='flex-1 grid grid-cols-1 w-full mb:grid-cols-3 desktop:flex-[3]'>
                    {map(footer, (item) => (
                        <div
                            key={item.id}
                            className='pt-[50px] pb-10 pl-[30px] flex flex-col items-center'
                        >
                            <div className='flex flex-col items-center'>
                                <h4 className='font-semibold text-lg pb-5'>
                                    {t(item.title)}
                                </h4>
                                <div className='h-[1px] bg-black w-12'></div>
                            </div>
                            <ul className='mt-[30px] clear-left flex flex-col items-center'>
                                {map(item.categories, (cate) => (
                                    <li
                                        key={cate.id}
                                        className='text-sm font-normal leading-8 hover:text-primary text-gray66 cursor-pointer transition-all'
                                    >
                                        {t(cate.title)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Footer;
