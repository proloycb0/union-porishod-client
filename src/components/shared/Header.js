import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import logo from '@/assets/logo.png';

const Header = () => {
    return (
        <Container maxWidth="lg">
        <Box className="xl:flex hidden items-center mt-5">
            <Image src={logo} width={71} height={71} alt='logo' className="mb-1 mr-12"/>
            <Typography variant="h4" component="div" sx={{ fontFamily: 'bold' }}>
                ৮ নং ডেমো ইউনিয়ন পরিষদ
            </Typography>
        </Box>
        </Container>
    );
};

export default Header;