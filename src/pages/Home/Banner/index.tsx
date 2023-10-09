import { images } from '@/assets/images';
import Button from '@/components/Button';
import { useTranslation } from 'react-i18next';

const Banner = () => {
    const { t } = useTranslation('home');
    return (
        <div className='flex justify-center'>
            <div className='w-full desktop:w-container'>
                <div className='grid grid-cols-1 tablet:grid-cols-2'>
                    <div className='p-base relative'>
                        <img
                            src={images.bg1}
                            alt='banner1'
                            className='h-full w-full'
                        />
                        <div className='absolute top-[50%] left-[10%] w-[50%] -translate-y-1/2'>
                            <div className='mb-[15px] py-[5px] px-[10px]'>
                                <h5 className='text-sm font-normal uppercase'>
                                    {t('100%')}
                                </h5>
                            </div>
                            <h2 className='text-[26px] tablet:text-[45px]  font-medium leading-tight mb-[30px]'>
                                {t('fresh')} <br />
                                {t('juice')}
                            </h2>
                            <Button onClick={() => console.log('click')}>
                                {t('shop now')}
                            </Button>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 mb:grid-cols-2'>
                        <div className='p-base '>
                            <div className='relative group overflow-hidden cursor-pointer'>
                                <img
                                    src={images.bg2}
                                    alt='banner2'
                                    className='h-full w-full group-hover:scale-105 transition-all duration-300'
                                />
                                <div className='absolute top-[50%] left-5 -translate-y-1/2'>
                                    <div className='group mb-[8px] py-[5px] px-[10px] hover:bg-primary w-fit rounded transition-all'>
                                        <h5 className='group-hover:text-white text-sm font-normal uppercase transition-all'>
                                            {t('discover')}
                                        </h5>
                                    </div>
                                    <h2 className='text-[28px] font-medium leading-tight mb-[15px]'>
                                        {t('Organic Product')}
                                    </h2>
                                    <Button
                                        variant='noBorder'
                                        onClick={() => console.log('click')}
                                    >
                                        {t('shop now')}
                                    </Button>
                                </div>
                            </div>

                            <div className='mt-[30px] relative group overflow-hidden cursor-pointer'>
                                <img
                                    src={images.bg3}
                                    alt='banner3'
                                    className='h-full w-full group-hover:scale-105 transition-all duration-300'
                                />
                                <div className='absolute top-[50%] left-5 -translate-y-1/2'>
                                    <div className='group mb-[8px] py-[5px] px-[10px] hover:bg-primary w-fit rounded transition-all'>
                                        <h5 className='group-hover:text-white text-sm font-normal uppercase transition-all'>
                                            {t('LIMITED')}
                                        </h5>
                                    </div>
                                    <h2 className='text-[28px] font-medium leading-tight mb-[15px]'>
                                        {t('Healthy Food')}
                                    </h2>
                                    <Button
                                        variant='noBorder'
                                        onClick={() => console.log('click')}
                                    >
                                        {t('shop now')}
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className='p-base w-full h-auto relative'>
                            <div className='relative group overflow-hidden cursor-pointer'>
                                <img
                                    src={images.bg4}
                                    alt='banner4'
                                    className='h-full w-full group-hover:scale-105 transition-all duration-300'
                                />
                                <div className='absolute top-[12%] left-[50%] -translate-x-1/2 w-[80%]'>
                                    <div className='flex flex-col items-center mb-[15px]'>
                                        <h2 className='text-[28px] font-medium text-center'>
                                            {t('BEST PRICE')}
                                            <br /> {t('ALWAYS')}
                                        </h2>
                                        <div className='h-[2px] w-[44%] bg-black'></div>
                                    </div>
                                    <p className='text-lg text-center w-full'>
                                        {t('Our Delicious')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
