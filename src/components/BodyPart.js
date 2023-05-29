import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/images/trainer-gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type='button'
    alignItems='center'
    justifyContent='center'
    className='bodyPart-card'
    sx={bodyPart === item ? {borderTop: '4px solid #D7DF01',
    background: '#fff', borderRadius: '5px', width: '270px',
    height: '250px', cursor: 'pointer', gap: '47px', } : {background: '#fff', borderRadius: '5px', width: '270px', height: '250px', cursor: 'pointer', gap: '47px', } }
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}>
    <Typography fontSize='24px' fontWeight='bold' fontFamily='Alegreya' color='#3A1212' textTransform='capitalize'>{' '}{item}</Typography>
    <img src={Icon} alt='dumbbell' style={{ width: '50%', height: '40%' }} />
  </Stack>
);

export default BodyPart;
