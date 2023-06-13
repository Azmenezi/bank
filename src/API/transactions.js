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

export async function getTransactionID(id) {
  return await axios.get(`${transactionURL}/transactions/${id}`);
}

const createTran = async (TranInfo) => {
  try {
    const { data } = await authInstance.post("/transactions", TranInfo);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const updateTran = async (TranInfo) => {
  try {
    const { data } = await authInstance.put(
      `/transactions/${TranInfo._id}`,
      TranInfo
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
export default { getTransctions, updateTran, createTran };
