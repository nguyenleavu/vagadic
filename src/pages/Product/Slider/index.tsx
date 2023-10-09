import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { isEmpty, map } from 'lodash';
interface SliderProps {
    images: string[];
}

const Slider = ({ images }: SliderProps) => {
    return (
        <div>
            {!isEmpty(images) ? (
                <Swiper
                    loop
                    navigation={{
                        nextEl: '.button-next',
                        prevEl: '.button-prev',
                    }}
                    modules={[Navigation]}
                    className='relative'
                >
                    {map(images, (item, index) => (
                        <SwiperSlide key={`item-${index}`}>
                            <div>
                                <img
                                    src={item}
                                    alt={item}
                                    className='w-full h-full bg-cover'
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                    <button className='button-next absolute right-2 tablet:right-10 top-1/2 -translate-y-1/2 z-30 text-gray66 h-10 w-10 rounded-full bg-white hover:bg-primary transition-all hover:text-white'>
                        <i className='fa-solid fa-arrow-right-long'></i>
                    </button>
                    <button className='button-prev absolute left-2 tablet:left-10 top-1/2 -translate-y-1/2 z-30 text-gray66 h-10 w-10 rounded-full bg-white hover:bg-primary transition-all hover:text-white'>
                        <i className='fa-solid fa-arrow-left-long'></i>
                    </button>
                </Swiper>
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default Slider;
