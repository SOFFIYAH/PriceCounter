import { useEffect, useState } from "react";
interface Tl {
  value: any;
}

export default function Quanty({ value }: Tl) {
  const [price, setPrice] = useState(1);
  const [dol, setDol] = useState("$");
  const [quant, setQuant] = useState(1);
  const [total, setTotal] = useState(1);

  let Gen = () => {
    let T = price * quant;
    console.log(T);

    setTotal(T);
  };
  let Cchnge = (e: any) => {
    setQuant(e.target.value);

    Gen();
  };

  let Cchnge2 = (e: any) => {
    setPrice(e.target.value);

    Gen();
  };
  return (
    <>
      <form className="flex gap-2">
        {/* first input PRICE */}
        <label htmlFor="p">Price:</label>
        <input
          type="text"
          name="price"
          id="p"
          value={price}
          onChange={(e) => Cchnge2(e)}
          className="border-solid border-2"
        />
        {/* sSECOND INPUT QUANTITY */}
        <label htmlFor="q">Quantity</label>
        <span>{quant}</span>
        <input
          type="range"
          min={1}
          max={100}
          name="quant"
          // className="border-solid border-2"
          value={quant}
          onChange={(e) => Cchnge(e)}
        />
      </form>
      {/* FOR THE TOTAL PRICE */}
      <div className="flex gap-2 mt-4 ml-24">
        <button
          onClick={Gen}
          className="p-2 bg-blue-400 text-yellow-100 rounded-md"
        >
          Generate Price
        </button>

        <span className="text-2xl">
          <span>{dol}</span>
          {total}
        </span>
      </div>
    </>
  );
}
