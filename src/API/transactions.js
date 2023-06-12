import axios from "axios";
import { authInstance } from ".";
const transactionURL = "https://coded-projects-api.herokuapp.com/api/auth/v3";

// export default async function getTransctions() {
//   return await authInstance.get(`/transactions`);
// }

const getTransctions = async () => {
  try {
    const { data } = await authInstance.get("/transactions");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export function addTransactions(x) {
  return axios.post(`${transactionURL}/transactions`, x);
}

export function getTransactionID(id) {
  return axios.get(`${transactionURL}/transactions/${id}`);
}

export default { getTransctions };
