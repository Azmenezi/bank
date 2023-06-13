import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import getTransctions from "../API/transactions";

export const Transactions = () => {
  const res = useQuery(["transactions"], () => getTransctions());
  const [show, setShow] = useState(false);
  const onClose = () => setShow(false);
  const onOpen = () => setShow(true);
  const TranList = res.data?.data.map((x) => (
    <Transactions key={x._id} {...x} />
  ));
  console.log(res);

  return (
    <>
      <div>
        <button onClick={onOpen}>Add transaction</button>
      </div>
      <div>{TranList}</div>;
    </>
  );
};
