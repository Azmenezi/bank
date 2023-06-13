import { authInstance } from ".";

const getTransctions = async () => {
  try {
    const { data } = await authInstance.get("/transactions");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export function addTransactions(x) {
  return authInstance.post(`/transactions`, x);
}

export async function getTransactionID(id) {
  return await authInstance.get(`/transactions/${id}`);
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
