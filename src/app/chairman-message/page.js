import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import image from '@/assets/download.png';

const ChairmanMessage = () => {
    return (
        <Box className='mt-10'>
            <Container>
                <Typography variant='h4' className='font-bold text-2xl mb-3'>চেয়ারম্যানের বার্তা</Typography>
                    <p className='border-t border-black mb-5'></p>
                    <Image className='w-50 h-50' width={0} height={0} src={image} alt="" />
                    <Typography variant='h6' className='mb-3 font-bold text-lg'>সোনাদিয়া ইউনিয়ন পরিষদ ইতিহাস </Typography>
                    <p>সোনাদিয়া ইউনিয়ন পরিষদের জন্ম হয় ১৯৫৮ সনে। সোনাদিয়া ইউনিয়ন পরিষদ মোট ৯ টি ওয়ার্ড রয়েছে। সোনাদিয়ার পশ্চিমে মেঘনা নদী, দক্ষিণে জাহাজমারা ইউনিয়ন , পূর্বে বুডিরচর ইউনিয়ন এবং উত্তরে তমরুদ্দিন ইউনিয়ন।</p>
            </Container>
        </Box>
    );
};

export default ChairmanMessage;