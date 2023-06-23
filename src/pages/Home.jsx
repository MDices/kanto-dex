import { Box, Grid } from '@mui/material'
import { Container } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import PokeCard from '../components/pokecard'
import ScrollToTopButton from '../components/ScrollToTopButton';
import { IconButton, ButtonGroup } from '@material-ui/core';
import { FilterList, Whatshot, Waves, FlashOn, Title } from '@material-ui/icons';
import { BugReport, Brightness7, Bolt, Flare, SportsMma, LocalFireDepartment, Air, Deblur, Forest, Terrain, AcUnit, Hive, Opacity, Psychology, AllOut, ViewTimeline, Tsunami } from '@mui/icons-material';
import styled from '@emotion/styled'




export const Home = () => {
  const [pokelist, setPokelist] = useState([])
  const [allpoke, setAllPoke] = useState([])


  useEffect(() => {
    getPokemon();
    pokemonData();
  }, [])

  const getPokemon = () => {
    var endpoints = []
    for (var i = 1; i <= 151; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }
    axios.all(endpoints.map(endpoint => axios.get(endpoint))).then((res) => setPokelist(res)).catch((err) => console.log(err));
  }

  const pokemonData = () => {
    var endpoints = []
    for (var i = 1; i <= 151; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }
    axios.all(endpoints.map(endpoint => axios.get(endpoint))).then((res) => setAllPoke(res)).catch((err) => console.log(err));
  }


  const handleTypeChange = (types) => {
    var pokeArray = [];

    if (types === "" || types === "all") {
      getPokemon()
    }
    else {

      for (var i in allpoke) {

        if (allpoke[i].data.types[0].type.name === types) {
          pokeArray.push(allpoke[i])

        }
        if (allpoke[i].data.types.length > 1) {
          if (allpoke[i].data.types[1].type.name === types) {

            pokeArray.push(allpoke[i])
          }

        }
      }
      setPokelist(pokeArray.map(poke => ({ ...poke })));
    }


  };

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

    setPokelist(pokeArray);
  }



  return (
    <div>
      <Navbar pokeSearches={pokeSearches}></Navbar>
      <Box marginBottom={10}>
        <ButtonGroup variant="contained">
          <IconButton
            onClick={() => handleTypeChange('all')}

          >
            <FilterList />
          </IconButton>
          <IconButton
            onClick={() => handleTypeChange('bug')}
          >
            <BugReport sx={{ color: '#ACC23E' }} />
          </IconButton>

          <IconButton
            onClick={() => handleTypeChange('dragon')}

          >
            <Brightness7 sx={{ color: '#8572C8' }} />
          </IconButton>

          <IconButton
            onClick={() => handleTypeChange('electric')}

          >
            <Bolt sx={{ color: '#E7C536' }} />
          </IconButton>

          <IconButton
            onClick={() => handleTypeChange('fairy')}

          >
            <Flare sx={{ color: '#E8B0EB' }} />
          </IconButton>



          <IconButton
            onClick={() => handleTypeChange('fighting')}

          >
            <SportsMma sx={{ color: '#C45D4C' }} />
          </IconButton>

          <IconButton
            onClick={() => handleTypeChange('fire')}

          >
            <LocalFireDepartment sx={{ color: '#E87A3D' }} />
          </IconButton>

          <IconButton
            onClick={() => handleTypeChange('flying')}

          >
            <Air sx={{ color: '#90AAD7' }} />
          </IconButton>

          <IconButton
            onClick={() => handleTypeChange('ghost')}

          >
            <Deblur sx={{ color: '#816DB6' }} />
          </IconButton>

          <IconButton
            onClick={() => handleTypeChange('grass')}

          >
            <Forest sx={{ color: '#78C850' }} />
          </IconButton>

          <IconButton
            onClick={() => handleTypeChange('ground')}

          >
            <Terrain sx={{ color: '#CEB250' }} />
          </IconButton>

          <IconButton
            onClick={() => handleTypeChange('ice')}

          >
            <AcUnit sx={{ color: '#81CFD7' }} />
          </IconButton>

          <IconButton
            onClick={() => handleTypeChange('normal')}

          >
            <Hive sx={{ color: '#ACAD99' }} />
          </IconButton>

          <IconButton
            onClick={() => handleTypeChange('poison')}

          >
            <Opacity sx={{ color: '#A040A0' }} />
          </IconButton>

          <IconButton
            onClick={() => handleTypeChange('psychic')}

          >
            <Psychology sx={{ color: '#E96C95' }} />
          </IconButton>

          <IconButton
            onClick={() => handleTypeChange('rock')}

          >
            <AllOut sx={{ color: '#BAA85E' }} />
          </IconButton>

          <IconButton
            onClick={() => handleTypeChange('steel')}

          >
            <ViewTimeline sx={{ color: '#9FA9AF' }} />
          </IconButton>

          <IconButton
            onClick={() => handleTypeChange('water')}

          >
            <Tsunami sx={{ color: '#639CE4' }} />
          </IconButton>


        </ButtonGroup>
      </Box>
      <Box>
        <Container maxWidth="false" sx={{ marginTop: "30px" }}>

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

      </Box>
    </div>
  )
}

export default Home