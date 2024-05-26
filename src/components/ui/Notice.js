import { Box, Button, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';

const Notice = () => {
    return (
        <Container>
            <Typography sx={{ backgroundColor: 'rgb(0,72,132)', borderRadius: '8px 8px 0 0' }} className='text-2xl p-2  mb-4 text-white'>নোটিশ</Typography>
            <Box sx={{ boxSizing: 'border-box', border: '1px solid #004884', padding: '15px 15px 0 15px', marginBottom: '30px', borderRadius: '0 0 6px 6px' }}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell className='font-bold'>তারিখ</TableCell>
                                <TableCell className='font-bold'>শিরোনাম</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>০২-১১-২০২৩</TableCell>
                                <TableCell>সোনাদিয়া ইউনিয়নের ইতিহাস</TableCell>
                                <TableCell className='text-right m-2'>
                                    <Button variant='contained'>ডাউনলোড</Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Container>
    );
};

export default Notice;