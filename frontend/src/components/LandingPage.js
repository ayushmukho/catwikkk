import React from 'react'
import HeroImg from '../assest/HeroImagelg.png'
import LP1 from '../assest/LP1.png'
import Container from '@mui/material/Container'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {
  Autocomplete,
  Button,
  Card,
  CardActions,
  CardContent,
  createFilterOptions,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'

const filter = createFilterOptions()

const top100Films = [
  { title: 'American Shorthair Cat' },
  { title: 'American Bobtail' },
  { title: 'Birman Cat' },
  { title: 'Burmese Cat' },
  { title: 'Bengal Cat' },
  { title: 'Munchkin Cat' },
  { title: 'Chartreux Cat' },
]

const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  ></Box>
)
const LandingPage = () => {
  const [value, setValue] = React.useState(null)

  axios.get(`http://localhost:4000/api/v1/getAllCats`).then((res) => {
    // console.log(res.data)
  })

  return (
    <Container fixed maxWidth>
      <Grid xs={12}>
        <Typography
          variant='h5'
          sx={{
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '10px',
            marginLeft: '-1200px',
          }}
        >
          CatWiki
        </Typography>
      </Grid>
        <img
          src={HeroImg}
          alt=''
          style={{
            width: '1300px',
            height: '500px',
            borderRadius: '50px 50px 0px 0px',
            marginLeft: '80px',
          }}
        />
        <Grid xs={6}>
          <Typography
            variant='h5'
            sx={{
              color: 'white',
              fontWeight: 'bold',
              display: 'flex',
              justifyContent: 'center',
              marginTop: '-300px',
              marginLeft: '-600px',
            }}
          >
            Get to know more about your cat breed
          </Typography>
          <Typography
            variant='h5'
            sx={{
              color: 'white',
              fontWeight: 'bold',
              display: 'flex',
              justifyContent: 'center',
              marginLeft: '-600px',
            }}
          >
            cat breed
          </Typography>

          <Autocomplete
            value={value}
            variant="filled"
            sx={{
              width: '300px',
              marginLeft: '275px',
              marginTop: '50px',
            }}
            onChange={(event, newValue) => {
              if (typeof newValue === 'string') {
                setValue({
                  title: newValue,
                })
              } else if (newValue && newValue.inputValue) {
                // Create a new value from the user input
                setValue({
                  title: newValue.inputValue,
                })
              } else {
                setValue(newValue)
              }
            }}
            filterOptions={(options, params) => {
              const filtered = filter(options, params)

              const { inputValue } = params
              // Suggest the creation of a new value
              const isExisting = options.some(
                (option) => inputValue === option.title
              )
              if (inputValue !== '' && !isExisting) {
                filtered.push({
                  inputValue,
                  title: `Add "${inputValue}"`,
                })
              }

              return filtered
            }}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            id='enter-your-breed'
            options={top100Films}
            getOptionLabel={(option) => {
              // Value selected with enter, right from the input
              if (typeof option === 'string') {
                return option
              }
              // Add "xxx" option created dynamically
              if (option.inputValue) {
                return option.inputValue
              }
              // Regular option
              return option.title
            }}
            renderOption={(props, option) => <li {...props}>{option.title}</li>}
            freeSolo
            renderInput={(params) => (
              <TextField {...params} label='Enter your breed' />
            )}
          />
          <Typography
            variant='h3'
            sx={{
              color: 'white',
              fontWeight: 'bold',
              display: 'flex',
              justifyContent: 'center',
              marginTop: '-250px',
              marginLeft: '-880px',
            }}
          >
            CatWiki
          </Typography>
        </Grid>
      <Grid xs={12}>
        <Typography
          variant='h6'
          sx={{
            color: 'brown',
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '320px',
            marginLeft: '-830px',
          }}
        >
          Most Searched Breeds
        </Typography>
      </Grid>
      <Grid xs={12}>
        <Typography
          variant='h3'
          sx={{
            color: 'black',
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
            marginLeft: '-620px',
          }}
        >
          66+ Breeds for you
        </Typography>
        <Typography
          variant='h3'
          sx={{
            color: 'black',
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '-10px',
            marginLeft: '-780px',
          }}
        >
          to Discover
        </Typography>
      </Grid>
      <Grid xs={12} sx={{ marginLeft: '600px' }}>
        <Card
          sx={{
            maxWidth: 220,
            maxHeight: 220,
            backgroundColor: '#e2e1dd',
            borderRadius: '25px',
          }}
        >
          <CardContent>
            <Typography
              variant='h5'
              sx={{
                color: 'black',
                fontWeight: 'bold',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Link to='/AllCats' style={{ textDecoration: 'none' }}>
                See All Cats
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid>
        <img
          style={{ marginLeft: '200px', marginTop: '50px' }}
          width='1050px'
          height='500px'
          src={LP1}
          alt=''
        />
      </Grid>
    </Container>
  )
}

export default LandingPage
