import React, { useEffect } from 'react'
import Navbar from '../components/navbar'
import { Container, Grid, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Divider } from '@mui/material'
import '../components/Card/styles.css';
import BaseStats from '../components/BaseStats';
import { useNavigate } from 'react-router-dom';


export const Profile = ({ pokemonData }) => {
  const { name, sprites } = pokemonData || {};


  const convertDecimeter = (number) => {
    var metros = number / 10;
    return metros.toFixed(1)
  }

  const twoTypes = (types) => {
    if (types[1]) {
      return <Typography className={types[1].type.name} gutterBottom component="div">{types[1].type.name}</Typography>;
    }
  }

  console.log(pokemonData)
  return (
    <>
      <Navbar hideSearch></Navbar>

      <Container maxWidth="md" sx={{ paddingBottom: "30px" }}>
        <Paper elevation={5}>
          <Typography variant="h3" className="pokeName" sx={{ paddingTop: "18px" }}>
            {name}
          </Typography>
          <Grid container spacing={2} paddingTop={2}>
            <Grid item xs={12} sm={6}>
              <Box component="img" src={sprites.front_default} alt="Imagem" width="100%" />
            </Grid>
            <Grid item xs={12} sm={6} alignItems="center">
              <TableContainer>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>National Nº</TableCell>
                      <TableCell>{pokemonData.id < 10 ? '00' + pokemonData.id : pokemonData.id < 100 ? '0' + pokemonData.id : pokemonData.id}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Height</TableCell>
                      <TableCell>{convertDecimeter(pokemonData.height)} m</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Weight</TableCell>
                      <TableCell>{convertDecimeter(pokemonData.weight)} kg</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Types</TableCell>
                      <TableCell>
                        <Box display="flex" justifyContent="left" width="100%">
                          <Typography className={pokemonData.types[0].type.name} marginRight={1} gutterBottom component="div">{pokemonData.types[0].type.name}</Typography>
                          {twoTypes(pokemonData.types)}
                        </Box>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Abilities</TableCell>
                      <TableCell style={{ textTransform: "capitalize" }}>{pokemonData.abilities[0].ability.name}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

            </Grid>
          </Grid>
          <Grid container spacing={2} paddingTop={2}>
            <Grid item xs={12} sm={12}>
              <Divider style={{ fontWeight: "bold", paddingTop: "6px", fontSize: "25px" }}>Other images</Divider>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Box component="img" src={sprites.back_default} alt="Imagem" width="100%" />
            </Grid>
            <Grid item xs={6} sm={4}>
              <Box component="img" src={sprites.front_shiny} alt="Imagem" width="100%" />
            </Grid>
            <Grid item xs={6} sm={4}>
              <Box component="img" src={sprites.back_shiny} alt="Imagem" width="100%" />
            </Grid>

          </Grid>
          <Grid container width={"100%"}>
            <Grid item xs={12} sm={12}>
              <Divider variant="fullWidth" />
            </Grid>
            <BaseStats baseStats={pokemonData.stats}></BaseStats>
          </Grid>
        </Paper>
      </Container>
    </>
  )
}

export default Profile