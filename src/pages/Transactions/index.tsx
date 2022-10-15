import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dataFormatter, priceFormatter } from "../../utils/formatter";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions(){
const {transactions} = useContext(TransactionsContext)
  return(
    <div>
      <Header/>
      <Summary/>

        <TransactionsContainer>
          <SearchForm/>
      <TransactionsTable>

        <thead></thead>
        <tbody>
         {transactions.map(transactions =>{
          return (
            <tr key={transactions.id}>
            <td width="50%">{transactions.description}</td>
            <td><PriceHighlight variant={transactions.type}>
              {transactions.type === 'outcome' && '- '}
              {priceFormatter.format(transactions.price)}</PriceHighlight></td>
            <td> {transactions.category}</td>
            <td> {dataFormatter.format(new Date(transactions.createdAt))}</td>
            </tr>
          )
         })}
        </tbody>
      </TransactionsTable>
        </TransactionsContainer>
    </div>
  )
}