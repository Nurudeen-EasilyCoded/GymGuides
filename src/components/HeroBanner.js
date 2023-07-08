import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import banner from '../assets/images/banner.png';
import banner2 from '../assets/images/banner2.png';

const HeroBanner = () => {
  return (
  <Box sx={{ width: '100%', marginBottom: '80px' }}>
    <Grid
      container
      direction='row'
      justifyContent='center'
      alignItems='center'
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{}}>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            textAlign: 'center',
            justifyContent: 'center',
            marginTop: { xs: '50px', md: '-300px' },
          }}>
          <Typography color='#D7DF01' fontWeight='600' fontSize='35px'>
            Fitness Club
          </Typography>
          <Typography
            fontWeight={700}
            sx={{ fontSize: { lg: '70px', xs: '45px' } }}
            mb='23px'
            mt='30px'>
            Sweat, Smile <br />
            And Repeat
          </Typography>
          <Typography
            fontSize='20px'
            fontFamily='Alegreya'
            lineHeight='35px'
            variant='body1'
            sx={{ fontSize: { lg: '30px', xs: '25px' } }}>
            Check out the most effective exercises personalized to you
          </Typography>
          <Button
            variant='contained'
            size='large'
            className='explore-btn'
            sx={{ mb: 5, mt: 5 }}
            href='#exercises'>
            Explore Exercises
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ marginTop: { md: '-150px' } }}>
          <img
            src={banner2}
            style={{ height: 'auto', width: '100%', maxWidth: '100%' }}
            // className='hero-banner-img'
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ marginTop: { md: '-300px' } }}>
          <Typography
            fontWeight={600}
            color='#D7DF01'
            sx={{
              textAlign: { lg: 'left', xs: 'center' },
              opacity: '0.1',
              // display: { lg: 'block', xs: 'none' },
              fontSize: { lg: '140px', xs: '50px' },
            }}>
            GYMGUIDE
          </Typography>
        </Box>
      </Grid>
    </Grid>
  </Box>
  );
};

export default HeroBanner;
