import { TableContainer, Paper, Table, TableBody, TableRow, TableCell } from '@mui/material';
import React from 'react';
// import { useStoreContext } from '../../app/context/StoreContext';
import { useAppSelector } from '../../app/store/configureStore';
import { currencyFormat } from '../../app/util/util';

function BasketSummary() {
  // const { basket } = useStoreContext();
  const { basket } = useAppSelector(state => state.basket);
  const subtotal = basket?.items.reduce((sum, item) => sum + (item.quantity * item.price), 0) ?? 0;
    const deliveryFee = subtotal > 1000000 ? 0 : 50000;

  return (
    <>
      <TableContainer component={Paper} variant={"outlined"}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell colSpan={2}>SubTotal</TableCell>
              <TableCell align="right">{currencyFormat(subtotal)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Delivery Fee</TableCell>
              <TableCell align="right">{currencyFormat(deliveryFee)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">{currencyFormat(subtotal + deliveryFee)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <span style={{ fontStyle: "italic" }}>
                  *Orders over $100 qualify for free delivery
                </span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default BasketSummary