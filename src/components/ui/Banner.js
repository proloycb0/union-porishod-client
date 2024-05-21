'use client'
import Image from 'next/image';
import Slider from 'react-slick';
import image1 from '@/assets/2.webp';
import image2 from '@/assets/1.webp'
import { Container } from '@mui/material';

const Banner = () => {

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Container className='mt-4 mb-5'>
            <Slider {...settings}>
                <div>
                    <Image className='w-screen h-96' width={0} height={0} alt='' src={image1} />
                </div>
                <div>
                    <Image className='w-screen h-96' width={0} height={0} alt='' src={image2} />
                </div>

            </Slider>
        </Container>
    );
};

export default Banner;