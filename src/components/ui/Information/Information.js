import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import image from '@/assets/download.png';
import Link from 'next/link';

const Information = () => {
    return (
        <Container>
            <Grid container spacing={0}>
                <Grid item xs={12} lg={9}>
                    <Typography sx={{ backgroundColor: 'rgb(0,72,132)', borderRadius: '6px 6px 0 0' }} className='text-2xl p-2  mb-4 text-white'>ডেমো ইউনিয়ন পরিষদ তথ্য</Typography>
                    <Box sx={{ boxSizing: 'border-box', border: '1px solid #004884', padding: '15px 15px 0 15px', marginBottom: '30px', borderRadius: '0 0 6px 6px' }}>
                        <p className='text-gray-700 text-base'>সোনাদিয়া ইউনিয়নের ইতিহাস সোনাদিয়া ইউনিয়নটি নোয়াখালী জেলার হাতিয়া উপজেলার অধীন একটি ইউনিয়ন। আদমশুমারী ২০২১ তথ্য মতে সোনাদিয়ার আয়তন ৯০.৫২ বর্গ কিলোমিটার, জনসংখ্যা প্রায় ৪৭ হাজার। তিনটি মৌজা চরচেংগা, মাইজচরা ও সোনাদিয়া মৌজার সমন্বয়ে ইউনিয়নটি গঠিত হলেও সোনাদিয়া মৌজার নামে ইউনিয়নটির নামকরন করা হয়।</p>
                        <div className='text-right'>
                            <Link href={'/union-information'}>
                                <Button variant='contained' className='right-8 mt-10 mb-10'>আরো পড়ুন...</Button>
                            </Link>
                        </div>
                    </Box>
                </Grid>
                <Grid className='lg:pl-4' xs={12} lg={3}>
                    <Typography sx={{ backgroundColor: 'rgb(0,72,132)', borderRadius: '6px 6px 0 0' }} className='text-2xl p-2  mb-4 text-white'>চেয়ারম্যানের বার্তা</Typography>
                    <Box className='text-center' sx={{ boxSizing: 'border-box', border: '1px solid #004884', padding: '15px 15px 0 15px', marginBottom: '30px', borderRadius: '0 0 6px 6px' }}>
                        <Image className='w-10 h-10 mx-auto' width={0} height={0} src={image} alt="" />
                        <h2>মেহেদী হাসান</h2>
                        <Link href={'/chairman-message'}>
                            <Button variant='contained' className='m-5'>আরো পড়ুন...</Button>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Information;