import { Card, CardContent, Container, Grid, Typography } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import CircularProgress from '@mui/material/CircularProgress'
import { Box } from '@mui/system'

const AllCats = () => {
  const [catArr, setCatArr] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/getAllCats`).then((res) => {
      setCatArr(res.data.data)
    })
  }, [])

  console.log(catArr)

  const route = (imgSrc) => {
    //e.preventDefault();
    console.log(imgSrc.id)
    navigate(`/single/${imgSrc.id}`)
  }

  return (
    <Container fixed maxWidth>
      {catArr ? (
        <>
          <Grid container>
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
            {catArr.map((imgSrc, i) => (
              <Grid sx={{ marginLeft: '135px' }}>
                <Card
                  sx={{
                    minWidth: 200,
                    minHeight: 200,
                    backgroundColor: '#e2e1dd',
                    borderRadius: '25px',
                    margin: '50px 50px 50px 50px',
                    cursor: 'pointer',
                  }}
                  onClick={() => route(imgSrc)}
                >
                  <CardContent>
                    <Typography
                      variant='h5'
                      sx={{
                        color: 'black',
                        fontWeight: 'bold',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <img
                        style={{ borderRadius: '20px' }}
                        width='200px'
                        height='200px'
                        src={imgSrc?.image?.url}
                        alt=''
                      />
                      {imgSrc?.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      )}
    </Container>
  )
}

export default AllCats
