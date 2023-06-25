import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import './styles.css';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    height: 350, // Defina a altura desejada para dispositivos móveis
    [theme.breakpoints.up('md')]: {
      height: 200, // Defina a altura desejada para dispositivos maiores que sm
    },
    [theme.breakpoints.up('lg')]: {
      height: 250, // Defina a altura desejada para dispositivos maiores que sm
    },
  },
}));

export default function PokeCard({ name, image, types, id }) {
  const classes = useStyles();
  let secondType
  if (types[1]) {
    secondType = <Typography className={types[1].type.name} gutterBottom component="div">{types[1].type.name}</Typography>;
  }
  return (

    <Box sx={{ width: '100%', cursor: 'pointer' }}>
      <Card sx={{ width: '100%', maxHeight: '100%', marginBottom: 2 }} >
        <Box align="center" paddingTop="15px">
          <CardMedia
            className={classes.cardMedia}

            image={image}
            title={name}
          />
        </Box>
        <CardContent>
          <Box className="dexNumber" align="left" paddingBottom="5px">
            {'Nº '}{id < 10 ? '00' + id : id < 100 ? '0' + id : id}
          </Box>
          <Typography className="pokeName" gutterBottom variant="h5" component="div" paddingBottom="2px">
            {name}
          </Typography>
          <Box display="flex" justifyContent="space-around" width="100%">
            <Typography className={types[0].type.name} gutterBottom component="div">
              {types[0].type.name}
            </Typography>
            {secondType}
          </Box>

        </CardContent>
        <CardActions>

        </CardActions>
      </Card>
    </Box>
  );
}
