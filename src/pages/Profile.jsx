import React from 'react'
import Navbar from '../components/navbar'
import { Box, Container, Typography } from '@mui/material'

export const Profile = (pokemonData) => {
  console.log("OLHA ELE AQUI " + pokemonData)

  return (
    <>
      <Navbar hideSearch></Navbar>
      <Container maxWidth="100%" padding="0px" margin="0px">
        <Typography>{pokemonData.name}</Typography>
      </Container>
    </>
  )
}

export default Profile