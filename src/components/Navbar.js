import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/gymguide.png';

const Navbar = () => (
  <Stack
    direction='row'
    justifyContent='space-around'
    sx={{
      gap: { sm: '100px', xs: '20px' },
      mt: { sm: '32px', xs: '20px' },
      justifyContent: 'none',
    }}
    px='20px'>
    <Link to='/'>
      <img
        src={Logo}
        alt='logo'
        style={{ width: '60px', height: '60px', margin: '0px 20px' }}
      />
    </Link>
    <Stack
      direction='row'
      gap='40px'
      fontFamily='Alegreya'
      fontSize='24px'
      alignItems='flex-end'>
      <Link
        to='/'
        style={{
          textDecoration: 'none',
          color: '#fff',
          borderBottom: '3px solid #D7DF01',
        }}>
        Home
      </Link>
      <a href='#exercises' style={{ textDecoration: 'none', color: '#fff' }}>
        Exercises
      </a>
    </Stack>
  </Stack>
);

export default Navbar;
