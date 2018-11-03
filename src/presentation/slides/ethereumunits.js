import React from 'react'
import { Slide, Heading, Appear, Table, TableHeader, TableHeaderItem, TableRow, TableItem, TableBody } from 'spectacle'

const introduceAgile = (
  <Slide bgColor='secondary' textColor='white'>
    <Heading textColor='tertiary' size={3}>
      Les unités Ethereum
    </Heading>
    <Appear>
      <Table textAlign='left'>
        <TableHeader>
          <TableRow>
            <TableHeaderItem>Unité</TableHeaderItem>
            <TableHeaderItem>Wei</TableHeaderItem>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableItem>Wei</TableItem>
            <TableItem>1 wei</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>Kwei</TableItem>
            <TableItem>1e3 wei (1 000 wei)</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>Mwei</TableItem>
            <TableItem>1e6 wei (1 000 000 wei)</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>Gwei</TableItem>
            <TableItem>1e9 wei (1 000 000 000 wei)</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>microether</TableItem>
            <TableItem>1e12 wei (1 000 00 000 000 wei)</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>milliether</TableItem>
            <TableItem>1e15 wei (1 000 000 000 000 000 wei)</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>ether</TableItem>
            <TableItem>1e18 wei (1 000 000 000 000 000 000 wei)</TableItem>
          </TableRow>
        </TableBody>
      </Table>
    </Appear>
  </Slide>
)

export default introduceAgile
