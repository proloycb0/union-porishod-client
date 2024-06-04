import { Box, Button, Container, Grid, Typography } from '@mui/material';
import applicationItems from './data1.json';
import React from 'react';
import Link from 'next/link';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const ApplicationVerification = () => {
    return (
        <Container>
            <Box sx={{ color: 'white', borderRadius: "6px", background: "linear-gradient(to right, #43cea2, #004884)", padding: '12px 20px 20px 20px', marginBottom: '30px' }}>
                <Typography className='font-bold text-lg'>সকল আবেদন যাচাই</Typography>
                <hr className='my-3' />
                <Grid container spacing={1}>
                    <Grid item xs={12} lg={4} className='mb-1'>
                        {applicationItems?.slice(0, 10).map((item, index) =>
                            <Link href={item.pathname} key={index}>
                                <Button className='block text-white'><ArrowRightIcon/>{item.route}</Button>
                            </Link>)}
                    </Grid>
                    <Grid item xs={12} lg={4} className='mb-1'>
                        {applicationItems?.slice(10, 20).map((item, index) =>
                            <Link href={item.pathname} key={index}>
                                <Button className='block text-white'><ArrowRightIcon/>{item.route}</Button>
                            </Link>)}
                    </Grid>
                    <Grid item xs={12} lg={4} className='mb-1'>
                        {applicationItems?.slice(20, 30).map((item, index) =>
                            <Link href={item.pathname} key={index}>
                                <Button sx={{textAlign: '-webkit-match-parent'}} className='block text-white'><ArrowRightIcon/>{item.route}</Button>
                            </Link>)}
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default ApplicationVerification;