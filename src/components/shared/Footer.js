import { Box, Button, Container,Grid, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const footerItems = [
    {
        "route": "নাগরিকত্ব সনদের আবেদন",
        "pathname": "/service/citizenship-certificate"
    },
    {
        "route": "নাগরিক আবেদন যাচাই",
        "pathname": "/verification/citizenship-certificate"
    },
    {
        "route": "ট্রেড লাইসেন্সের আবেদন",
        "pathname": "/service/trade-license"
    },
    {
        "route": "ট্রেড লাইসেন্সের আবেদন যাচাই",
        "pathname": "/verification/trade-license"
    },
    {
        "route": "ট্রেড লাইসেন্স নবায়ন",
        "pathname": "/service/trade-license-renewal"
    },
    {
        "route": "ওয়ারিশ সনদের আবেদন",
        "pathname": "/service/inheritance-certificate"
    },
    {
        "route": "ওয়ারিশ সনদের আবেদন যাচাই",
        "pathname": "/verification/inheritance-certificate"
    }
];

const footerLink = [
    {
        "route": "পাসপোর্টের আবেদন ফরম",
        "pathname": "https://www.passport.gov.bd/"
    },
    {
        "route": "অনলাইন জন্ম/মৃত্যু নিবন্ধন",
        "pathname": "https://bris.lgd.gov.bd/pub/"
    },
    {
        "route": "ভিসা যাচাই",
        "pathname": "https://bmet.gov.bd/BMET/onlinaVisaCheckAction"
    },
    {
        "route": "ই-স্বাস্থ্য সেবা ",
        "pathname": "https://app.dghs.gov.bd/"
    },
    {
        "route": "সরকারি ফরম",
        "pathname": "http://www.forms.gov.bd/"
    },
    {
        "route": "সমাপনী পরীক্ষার ফলাফল",
        "pathname": "https://dpe.portal.gov.bd/site/page/256bd7b9-cfa4-4f71-afa6-3b8262f4021f"
    },
    {
        "route": "ই-টেন্ডার(e-GP)",
        "pathname": "https://www.eprocure.gov.bd/"
    },
]

const Footer = () => {
    return (
        <Box sx={{backgroundColor: 'rgb(96,125,139)', color: 'white'}}>
            <Container className='py-5' >
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Typography className='text-2xl font-bold mx-2 my-2'>ই-সেবা</Typography>
                        {
                            footerItems.map((item) => (
                                <Link href={item.pathname} key={item}>
                                    <Button className='block text-white text-base'>{item.route}</Button>
                                </Link>
                            ))}
                    </Grid>
                    <Grid item xs>
                    <Typography className='text-2xl font-bold mx-2 my-2'>গুরুত্বপূর্ণ লিঙ্ক</Typography>
                        {
                            footerLink.map((item) => (
                                <Link href={item.pathname} key={item}>
                                    <Button className='block text-white text-base'>{item.route}</Button>
                                </Link>
                            ))}
                    </Grid>
                    <Grid item xs>
                        <Typography className='text-2xl font-bold mx-2 my-2'>ঠিকানা</Typography>
                        <Typography className='my-2 text-base'>মোবাইল নং: ০১৭৯২০১৬৭০৮</Typography>
                        <Typography className='my-2 text-base'>ফোন: ০১৭৯২০১৬৭০৮</Typography>
                        <Typography className='my-2 text-base'>ইমেইল: proloychacroborty24@gmail.com</Typography>
                        <Typography className='my-2 text-base'>ওয়েবসাইট: https://union.xyz/</Typography>
                    </Grid>
                </Grid>
                <hr className='my-5 '/>
                <Typography className='text-right'>Developed by Proloy</Typography>
            </Container>
        </Box>
    );
};

export default Footer;