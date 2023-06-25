import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  LinearProgress,
} from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#46166B', // Substitua pelo código de cor personalizado desejado
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 20, // Ajuste a altura desejada da barra
    backgroundColor: 'transparent',

  },
  bar: {
    color: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadius,
    transition: 'width 0.5s ease-in-out',
  },
  barWrapper: {
    overflow: 'hidden',
    borderRadius: theme.shape.borderRadius,
  },

  tableCell: {

  },

  tableTitle: {
    fontSize: '25px',
    fontWeight: 'bold'
  }
}));

const BaseStats = ({ baseStats }) => {
  const classes = useStyles();

  const getStats = [
    { name: 'HP', value: baseStats[0].base_stat },
    { name: 'Attack', value: baseStats[1].base_stat },
    { name: 'Defense', value: baseStats[2].base_stat },
    { name: 'SP. Atk', value: baseStats[3].base_stat },
    { name: 'SP. Def', value: baseStats[4].base_stat },
    { name: 'Speed', value: baseStats[5].base_stat },

  ];

  const customRange = (stat) => {
    return (stat / 150) * 100
  }


  return (
    <TableContainer >
      <Table>
        <TableHead>
          <TableCell className={classes.tableTitle} colSpan={12} align="center">Base stats</TableCell>
        </TableHead>
        <TableBody>
          {getStats.map((stat) => (
            <TableRow key={stat.name}>
              <TableCell className={classes.tableCell} width={"5%"} style={{ color: '#737373', fontSize: '14px' }}>{stat.name}</TableCell>
              <TableCell width={"5%"} align="center" style={{ fontWeight: 'bold' }}>{stat.value}</TableCell>
              <TableCell width={"90%"}>
                <ThemeProvider theme={theme}>
                  <LinearProgress
                    variant="determinate"
                    value={customRange(stat.value)}
                    classes={{
                      root: classes.root,
                      bar: classes.bar,
                    }}
                    color="primary" // Define a cor da barra como roxa (cor primária)
                  />
                </ThemeProvider>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BaseStats;
