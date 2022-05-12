import { Grid, Typography, Box, Rating, CircularProgress } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const SingleCatDetails = () => {
  const { id } = useParams()
  const [catArr, setCatArr] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/getCatById/${id}`).then((res) => {
      setCatArr(res?.data?.data)
      // console.log(res.data.data[0].breeds[0].name)
      // console.log(res.data.data)
    })
  }, [])

  console.log(catArr[0]?.breeds[0]?.adaptability)

  return (
    <Box sx={{ padding: '100px', marginLeft: '100px' }}>
      {catArr ? (
        <Grid container>
          <Grid item xs={3} sx={{ justifyContent: 'center' }}>
            <img
              style={{ borderRadius: '25px', width: '250px', height: '250px' }}
              src={catArr[0]?.url}
              alt='cat'
            />
          </Grid>
          <Grid item xs={9}>
            <Typography variant='h3'>{catArr[0]?.breeds[0]?.name}</Typography>
            <Typography sx={{ marginTop: '20px' }}>
              {catArr[0]?.breeds[0]?.description}
            </Typography>
            <div>
              <Typography
                style={{
                  display: 'inline-block',
                  marginTop: '20px',
                  fontWeight: 'bold',
                }}
              >
                Temperament:{' '}
              </Typography>
              <Typography style={{ display: 'inline-block' }}>
                {' '}
                {catArr[0]?.breeds[0]?.temperament}
              </Typography>
            </div>

            <div>
              <Typography
                style={{
                  display: 'inline-block',
                  marginTop: '20px',
                  fontWeight: 'bold',
                }}
              >
                Origin:{' '}
              </Typography>
              <Typography style={{ display: 'inline-block' }}>
                {' '}
                {catArr[0]?.breeds[0]?.origin}
              </Typography>
            </div>

            <div>
              <Typography
                style={{
                  display: 'inline-block',
                  marginTop: '20px',
                  fontWeight: 'bold',
                }}
              >
                Lifespan:{' '}
              </Typography>
              <Typography style={{ display: 'inline-block' }}>
                {' '}
                {catArr[0]?.breeds[0]?.life_span}
              </Typography>
            </div>
            <Grid
              container
              sx={{ marginTop: '10px' }}
              spacing={9}
              direction='row'
            >
              <Grid item>
                <Typography>Adaptability:</Typography>

                <Typography sx={{ marginTop: '5vh' }}>
                  Affection Level
                </Typography>

                <Typography sx={{ marginTop: '5vh' }}>
                  Child Friendly
                </Typography>

                <Typography sx={{ marginTop: '5vh' }}>Grooming</Typography>

                <Typography sx={{ marginTop: '5vh' }}>Intelligence</Typography>

                <Typography sx={{ marginTop: '5vh' }}>Health Issues</Typography>

                <Typography sx={{ marginTop: '5vh' }}>Social Needs</Typography>
                <Typography sx={{ marginTop: '5vh' }}>
                  Stranger Friendly
                </Typography>
              </Grid>
              <Grid item>
                <Grid container direction='column' spacing={4}>
                  <Grid item>
                    <Rating
                      name='read-only'
                      value={catArr[0]?.breeds[0]?.adaptability ?? 0}
                      readOnly
                    />
                  </Grid>
                  <Grid item>
                    <Rating
                      name='read-only'
                      value={catArr[0]?.breeds[0]?.affection_level ?? 0}
                      readOnly
                    />
                  </Grid>
                  <Grid item>
                    <Rating
                      name='read-only'
                      value={catArr[0]?.breeds[0]?.child_friendly ?? 0}
                      readOnly
                    />
                  </Grid>
                  <Grid item>
                    <Rating
                      name='read-only'
                      value={catArr[0]?.breeds[0]?.grooming ?? 0}
                      readOnly
                    />
                  </Grid>
                  <Grid item>
                    <Rating
                      name='read-only'
                      value={catArr[0]?.breeds[0]?.intelligence ?? 0}
                      readOnly
                    />
                  </Grid>
                  <Grid item>
                    <Rating
                      name='read-only'
                      value={catArr[0]?.breeds[0]?.health_issues ?? 0}
                      readOnly
                    />
                  </Grid>
                  <Grid item>
                    <Rating
                      name='read-only'
                      value={catArr[0]?.breeds[0]?.social_needs ?? 0}
                      readOnly
                    />
                  </Grid>
                  <Grid item>
                    <Rating
                      name='read-only'
                      value={catArr[0]?.breeds[0]?.stranger_friendly ?? 0}
                      readOnly
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      )}
    </Box>
  )
}

export default SingleCatDetails
