import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions(){
  return(
    <div>
      <Header/>
      <Summary/>

        <TransactionsContainer>
          <SearchForm/>
      <TransactionsTable>

        <thead></thead>
        <tbody>
          <tr>
          <td width="50%">Desenvolvimento web</td>
          <td><PriceHighlight variant="income">12000</PriceHighlight></td>
          <td> Venda</td>
          <td> data</td>
          </tr>
          <tr>
          <td width="50%">Desenvolvimento web</td>
          <td><PriceHighlight variant="outcome">- 6000</PriceHighlight></td>
          <td> Venda</td>
          <td> data</td>
          </tr>
        </tbody>
      </TransactionsTable>
        </TransactionsContainer>
    </div>
  )
}