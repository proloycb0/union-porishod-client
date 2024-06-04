import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const UPMemberList = () => {
    return (
        <div>
            <Container>
                <Typography sx={{ backgroundColor: 'rgb(0,72,132)', borderRadius: '8px 8px 0 0' }} className='text-2xl p-2 mb-4 text-white'>
                ইউপি সচিব , হিসাব সহকারী কাম কম্পিউটার অপারেটর ও উদ্যোক্তাগণ
                </Typography>
                <Box sx={{ boxSizing: 'border-box', border: '1px solid #004884', padding: '15px 15px 0 20px', marginBottom: '30px', borderRadius: '0 0 6px 6px' }}>
                    
                </Box>
            </Container>
            <Container>
                <Typography sx={{ backgroundColor: 'rgb(0,72,132)', borderRadius: '8px 8px 0 0' }} className='text-2xl p-2 mb-4 text-white'>
                ইউপি মেম্বার ও অন্যান্য ব্যক্তিগণ
                </Typography>
                <Box sx={{ boxSizing: 'border-box', border: '1px solid #004884', padding: '15px 15px 0 20px', marginBottom: '30px', borderRadius: '0 0 6px 6px' }}>
                   
                </Box>
            </Container>
        </div>
    );
};

export default UPMemberList;