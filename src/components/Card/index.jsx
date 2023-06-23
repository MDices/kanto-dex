import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import './styles.css';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    height: 300, // Defina a altura desejada para dispositivos móveis
    [theme.breakpoints.up('sm')]: {
      height: 200, // Defina a altura desejada para dispositivos maiores que sm
    },
  },
}));

export default function PokeCard({ name, image, types }) {
  const classes = useStyles();
  let secondType
  if (types[1]) {
    secondType = <Typography className={types[1].type.name} gutterBottom component="div">{types[1].type.name}</Typography>;
  }
  return (

    <Box sx={{ width: '100%' }}>
      <Card sx={{ width: '100%', maxHeight: '100%', marginBottom: 2.5 }} >

        <CardMedia
          className={classes.cardMedia}
          sx={{ width: '100%' }}
          image={image}
          title={name}


        />

        <CardContent>
          <Typography className="pokeName" gutterBottom variant="h5" component="div">
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
