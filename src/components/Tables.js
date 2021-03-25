import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
// import TablePagination from '@material-ui/core/TablePagination';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



const BasicTable = (props) => {
  const classes = useStyles();
  const { nutrientHash } = props
  // console.log(nutrientHash)
  return (
      <>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nutrient Name:</TableCell>
            <TableCell align="right">Value: </TableCell>
            {/* <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {nutrientHash ?  nutrientHash.map((nutrient) => (
            <TableRow key={nutrient.nutrientNumber}>
              <TableCell component="th" scope="row">
                {nutrient.nutrientName}
              </TableCell>
              <TableCell align="right">{nutrient.nutrietName}</TableCell>
              <TableCell align="right">{nutrient.value} ({nutrient.unitName})</TableCell>
            </TableRow>
          )) : null }
        </TableBody>
      </Table>
    </TableContainer>
    {/* <TablePagination /> */}
    </>
  );
}

const mapStateToProps = (state) => ({...state.foods.selectedFood})

export default connect(mapStateToProps)(BasicTable) 
