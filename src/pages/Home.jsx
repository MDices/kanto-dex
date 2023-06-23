import { Box, Grid } from '@mui/material'
import { Container } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import PokeCard from '../components/pokecard'
import ScrollToTopButton from '../components/ScrollToTopButton';
import { IconButton, ButtonGroup } from '@material-ui/core';
import { FilterList } from '@material-ui/icons';
import { BugReport, Brightness7, Bolt, Flare, SportsMma, LocalFireDepartment, Air, Deblur, Forest, Terrain, AcUnit, Hive, Opacity, Psychology, AllOut, ViewTimeline, Tsunami } from '@mui/icons-material';
import './styles.css';




export const Home = () => {
  const [pokelist, setPokelist] = useState([])
  const [allpoke, setAllPoke] = useState([])
  const [selectedType, setSelectedType] = useState(null);

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
    setSelectedType(types)
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
        <div
          style={{
            overflowX: 'auto',
            height: '50px',
            justifyContent: 'center', // Alinha os botões horizontalmente no centro
            alignItems: 'center', // Alinha os botões verticalmente no centro
            minWidth: '100%',
            position: 'relative', // Adicione esta propriedade para aplicar o estilo ao scroll

            // Estilo para o scroll horizontal
            '&::-webkit-scrollbar': {
              height: '8px',
              backgroundColor: 'transparent', // Define a cor de fundo do scroll como transparente
            },
            '&::-webkit-scrollbar-thumb': {
              borderRadius: '8px',
              backgroundColor: 'rgba(0, 0, 0, 0.2)', // Define a cor do scroll como um tom de cinza transparente
            },
          }}
        >
          <ButtonGroup variant="contained"
          >
            <IconButton
              onClick={() => handleTypeChange('all')}
            >
              <FilterList />
            </IconButton>
            <IconButton
              onClick={() => handleTypeChange('bug')
              } className={selectedType === 'bug' ? 'selected-bug' : ''}
            >
              <BugReport className={selectedType === 'bug' ? 'selected-icon' : ''} sx={{ color: '#ACC23E' }} />
            </IconButton>

            <IconButton
              onClick={() => handleTypeChange('dragon')}
              className={selectedType === 'dragon' ? 'selected-dragon' : ''}

            >
              <Brightness7 className={selectedType === 'dragon' ? 'selected-icon' : ''} sx={{ color: '#8572C8' }} />
            </IconButton>

            <IconButton
              onClick={() => handleTypeChange('electric')}
              className={selectedType === 'electric' ? 'selected-electric' : ''}

            >
              <Bolt className={selectedType === 'electric' ? 'selected-icon' : ''} sx={{ color: '#E7C536' }} />
            </IconButton>

            <IconButton
              onClick={() => handleTypeChange('fairy')}
              className={selectedType === 'fairy' ? 'selected-fairy' : ''}
            >
              <Flare className={selectedType === 'fairy' ? 'selected-icon' : ''} sx={{ color: '#E8B0EB' }} />
            </IconButton>

            <IconButton
              onClick={() => handleTypeChange('fighting')}
              className={selectedType === 'fighting' ? 'selected-fighting' : ''}

            >
              <SportsMma className={selectedType === 'fighting' ? 'selected-icon' : ''} sx={{ color: '#C45D4C' }} />
            </IconButton>

            <IconButton
              onClick={() => handleTypeChange('fire')}
              className={selectedType === 'fire' ? 'selected-fire' : ''}
            >
              <LocalFireDepartment className={selectedType === 'fire' ? 'selected-icon' : ''} sx={{ color: '#E87A3D' }} />
            </IconButton>

            <IconButton
              onClick={() => handleTypeChange('flying')}
              className={selectedType === 'flying' ? 'selected-flying' : ''}

            >
              <Air className={selectedType === 'flying' ? 'selected-icon' : ''} sx={{ color: '#90AAD7' }} />
            </IconButton>

            <IconButton
              onClick={() => handleTypeChange('ghost')}
              className={selectedType === 'ghost' ? 'selected-ghost' : ''}
            >
              <Deblur className={selectedType === 'ghost' ? 'selected-icon' : ''} sx={{ color: '#816DB6' }} />
            </IconButton>

            <IconButton
              onClick={() => handleTypeChange('grass')}
              className={selectedType === 'grass' ? 'selected-grass' : ''}
            >
              <Forest className={selectedType === 'grass' ? 'selected-icon' : ''} sx={{ color: '#78C850' }} />
            </IconButton>

            <IconButton
              onClick={() => handleTypeChange('ground')}
              className={selectedType === 'ground' ? 'selected-ground' : ''}
            >
              <Terrain className={selectedType === 'ground' ? 'selected-icon' : ''} sx={{ color: '#CEB250' }} />
            </IconButton>

            <IconButton
              onClick={() => handleTypeChange('ice')}
              className={selectedType === 'ice' ? 'selected-ice' : ''}
            >
              <AcUnit className={selectedType === 'ice' ? 'selected-icon' : ''} sx={{ color: '#81CFD7' }} />
            </IconButton>

            <IconButton
              onClick={() => handleTypeChange('normal')}
              className={selectedType === 'normal' ? 'selected-normal' : ''}
            >
              <Hive className={selectedType === 'normal' ? 'selected-icon' : ''} sx={{ color: '#ACAD99' }} />
            </IconButton>

            <IconButton
              onClick={() => handleTypeChange('poison')}
              className={selectedType === 'poison' ? 'selected-poison' : ''}
            >
              <Opacity className={selectedType === 'poison' ? 'selected-icon' : ''} sx={{ color: '#A040A0' }} />
            </IconButton>

            <IconButton
              onClick={() => handleTypeChange('psychic')}
              className={selectedType === 'psychic' ? 'selected-psychic' : ''}
            >
              <Psychology className={selectedType === 'psychic' ? 'selected-icon' : ''} sx={{ color: '#E96C95' }} />
            </IconButton>

            <IconButton
              onClick={() => handleTypeChange('rock')}
              className={selectedType === 'rock' ? 'selected-rock' : ''}
            >
              <AllOut className={selectedType === 'rock' ? 'selected-icon' : ''} sx={{ color: '#BAA85E' }} />
            </IconButton>

            <IconButton
              onClick={() => handleTypeChange('steel')}
              className={selectedType === 'steel' ? 'selected-steel' : ''}
            >
              <ViewTimeline className={selectedType === 'steel' ? 'selected-icon' : ''} sx={{ color: '#9FA9AF' }} />
            </IconButton>

            <IconButton
              onClick={() => handleTypeChange('water')}
              className={selectedType === 'water' ? 'selected-water' : ''}
            >
              <Tsunami className={selectedType === 'water' ? 'selected-icon' : ''} sx={{ color: '#639CE4' }} />
            </IconButton>


          </ButtonGroup>
        </div>
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