import { authInstance, instance } from ".";

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

const deposit = async (amount) => {
  try {
    const { data } = await instance.post("/deposit", {
      amount: Number(amount),
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
const withdraw = async (amount) => {
  try {
    const { data } = await instance.post("/withdraw", {
      amount: Number(amount),
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getTransctions, updateTran, createTran, deposit, withdraw };
