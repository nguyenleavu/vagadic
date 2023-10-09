import BoxTitle from '@/components/BoxTitle';
import instagram from '@/assets/mock/instagram.json';
import { map } from 'lodash';
import { useTranslation } from 'react-i18next';

const Instagram = () => {
    const { t } = useTranslation('home');

    return (
        <div className='flex justify-center mt-[70px] mb-[15px]'>
            <div className='w-container'>
                <BoxTitle title={t('instagram')} />
                <div className='grid grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-5 gap-[10px] px-base mt-5'>
                    {map(instagram, (image) => (
                        <div
                            key={image.id}
                            className='group overflow-hidden cursor-pointer'
                        >
                            <img
                                src={image.image}
                                alt={image.image}
                                className='group-hover:scale-105 transition-all duration-300'
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Instagram;
