import React, { useEffect, useState } from 'react';
import { Box, Button, Divider, InputBase, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import { exerciseOptions, fetchData } from '../utils/fetchData';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions
      );

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <>
      <Box
        sx={{
          margin: '5px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Typography
          variant='h4'
          fontWeight={700}
          sx={{ fontSize: { lg: '44px', xs: '20px', marginBottom: '30px' } }}>
          Awesome Exercises For You
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '800px',
            bgcolor: 'white',
            height: 'fit-content',
            padding: '10px',
            marginBottom: '10px',
          }}>
          <InputBase
            sx={{ flex: 1, mr: 1 }}
            placeholder='Search Exercises'
            inputProps={{ 'aria-label': 'search search exercises' }}
            value={search}
            onChange={(event) => setSearch(event.target.value.toLowerCase())}
          />
          <Divider sx={{ height: 28, mr: 1.5 }} orientation='vertical' />
          <Button
            variant='outlined'
            onClick={handleSearch}
            className='search-btn'>
            Search
          </Button>
        </Box>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyParts
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </Box>
    </>
  );
};

export default SearchExercises;
