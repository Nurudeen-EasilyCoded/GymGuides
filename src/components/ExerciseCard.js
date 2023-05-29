import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Button, Chip, Divider, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const ExerciseCard = ({ exercise }) => {
  return (
   <Link to={`/exercise/${exercise.id}`} style={{ textDecoration: 'none' }}>
      <Card sx={{ maxWidth: 345, height: '100%' }}>
        <CardHeader
          titleTypographyProps={{
            variant: 'subtitle',
            sx: {
              fontWeight: 'bold',
              textTransform: 'uppercase',
              // color: 'red',
            },
          }}
          title={exercise.name}
        />
        <CardMedia
          component='img'
          height='300'
          image={exercise.gifUrl}
          alt={exercise.name}
          loading='lazy'
        />
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
          <span style={{ textTransform: 'capitalize' }}>{exercise.name}</span> is one of the best exercises to target your {exercise.target}.
           </Typography>
        </CardContent>
        <Stack
          direction='column'
          justifyContent='center'
          alignItems='center'
          spacing={0}
          mb={2}>
          <Stack direction='row' spacing={1}>
            <Chip
              label='Target'
              color='secondary'
              variant='outlined'
              size='small'
              sx={{ width: '100px' }}
            />
            <Chip
              label='Body Part'
              color='error'
              variant='outlined'
              size='small'
              sx={{ width: '100px' }}
            />
          </Stack>
          <Stack direction='row' spacing={1}>
            <Chip
              label={exercise.target}
              color='secondary'
              size='small'
              sx={{ width: '100px' }}
            />
            <Chip
              label={exercise.bodyPart}
              color='error'
              size='small'
              sx={{ width: '100px' }}
            />
          </Stack>
        </Stack>
      </Card>
    </Link>
  );
};

export default ExerciseCard;
