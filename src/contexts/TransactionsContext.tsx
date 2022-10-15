import { createContext, ReactNode, useEffect, useState } from "react";


interface Transaction{
  id: number
  description: string 
  type: "income" |  "outcome"
  category: string
  price: number
  createdAt: string
}

interface TransactionContextType{
  transactions:Transaction[]
}
interface TransactionsProviderProps {
  children:ReactNode
}
export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({children}:TransactionsProviderProps){
  const [transactions, setTransactions]= useState<Transaction[]>([])

  useEffect(()=>{
    //1
    // fetch('http://localhost:3000/transactions')
    // .then(response=>{
    //   response.json().then(data=>{
    //     console.log(data)
    //   })
    // })
    //2
    // fetch('http://localhost:3000/transactions')
    // .then(response=>    response.json())
    // .then(data=>{
    //   console.log(data)
    // })
    //3
    async function loadTransaction(){
      const response = await fetch('http://localhost:3000/transactions')
      const data = await response.json()
      console.log(data)
      setTransactions(data)
    }
    loadTransaction();
  },[])
  return(
    <TransactionsContext.Provider value={{transactions}}>
      {children}
    </TransactionsContext.Provider>
  )
}