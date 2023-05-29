import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/gymguide.png';

const Footer = () => (
  <Box mt='80px' borderTop='1px solid #A4A4A4'>
    <Stack
      gap='40px'
      sx={{ alignItems: 'center' }}
      flexWrap='wrap'
      px='40px'
      pt='24px'>
      <img src={Logo} alt='logo' style={{ width: '5%', height: '5%' }} />
    </Stack>
    <Typography
      variant='h5'
      sx={{ fontSize: { lg: '16px', xs: '14px' } }}
      mt='41px'
      textAlign='center'
      pb='40px'>
      Made with ❤️ by{' '}
      <a
        href='http://everythingcoded.com' 
        rel="noreferrer"
        style={{ textDecoration: 'none', color: '#81BEF7' }}
        target='_blank'>
        EverythingCoded
      </a>
      <span> inspired by JSM</span>
    </Typography>
  </Box>
);

export default Footer;
