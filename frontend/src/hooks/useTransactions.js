import { useContext } from "react";
import { useTransactionContext } from "../state/TransactionContext";

export default function useTransactions() {
  return useTransactionContext();
}
