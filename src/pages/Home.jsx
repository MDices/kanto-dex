import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import PokeCard from '../components/pokecard'
import ScrollToTopButton from '../components/ScrollToTopButton';

export const Home = () => {
  const [pokelist, setPokelist] = useState([])

  useEffect(() => {
    getPokemon()
  }, [])
  const getPokemon = () => {
    var endpoints = []
    for (var i = 1; i <= 151; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }

    axios.all(endpoints.map(endpoint => axios.get(endpoint))).then((res) => setPokelist(res)).catch((err) => console.log(err));

    // axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
    //   .then((res) => setPokelist(res.data.results))
    //   .catch((err) => console.log(err))
  }

  const pokeSearches = (name) => {
    var pokeArray = [];
    if (name === "") {
      getPokemon()
    }
    for (var i in pokelist) {
      if (pokelist[i].data.name.includes(name)) {
        pokeArray.push(pokelist[i])
      }
    }
    console.log(pokeArray)
    setPokelist(pokeArray);
  }



  return (
    <div>
      <Navbar pokeSearches={pokeSearches}></Navbar>
      <Container maxWidth="false" >
        <Grid container spacing={12} justify="center">
          {pokelist.map((poke, key) => (
            <Grid item xs={12} sm={4} md={2} key={key} alignItems="center" pl={{ xs: 2, sm: 0 }}>
              <PokeCard name={poke.data.name} image={poke.data.sprites.front_default} types={poke.data.types}></PokeCard>
            </Grid>
          ))
          }


        </Grid>
        <ScrollToTopButton />
      </Container>
    </div>
  )
}

export default Home