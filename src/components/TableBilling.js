import React from "react"

export default function Table({ list, total,currency }) {
  return (
    <>
      <table width="100%" className="mb-10">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold">Monthly Collection</td>
            <td className="font-bold">Percentage</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, price, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr className="h-10">
                <td>{quantity}</td>
                <td> {price.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}</td>
                <td>{amount}</td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>

      <div>
      <p className="flex items-end justify-end text-gray-800 text-2xl">Total Amount :   <b>{currency} {total.toLocaleString()}</b>   </p>

      </div>
    </>
  )
}
