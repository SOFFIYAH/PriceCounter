"use client";
import { useState } from "react";
import Price from "../components/price";
import Quanty from "../components/quantity";
import Total from "../components/total";

export default function Shu() {
  // const [total, setTotal] = useState(0);
  // const [price, setPrice] = useState(0);
  // const [quant, setQuant] = useState(1);
  // function itT() {
  //   setTotal(45);
  // }
  // setTotal()function alL() {
  //   let T = price * quant;
  //   let Nt = T.toString();
  //   return Nt;
  // });

  return (
    <>
      {/* <Price value={price}/> */}
      <Quanty value={4} />
      {/* <Total value={total} /> */}
    </>
  );
}
