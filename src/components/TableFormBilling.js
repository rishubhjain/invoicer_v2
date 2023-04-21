import React, { useState, useEffect } from "react"
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"
import { v4 as uuidv4 } from "uuid"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function TableFormBilling({
  description,
  setDescription,
  quantity,
  setQuantity,
  price,
  setPrice,
  amount,
  setAmount,
  list,
  setList,
  total,
  setTotal,
  currency,
}) {
  const [isEditing, setIsEditing] = useState(false)

  // Submit form function
  const handleSubmit = (e) => {
    e.preventDefault()

    if ( !quantity || !price) {
      toast.error("Please fill in all inputs")
    } else {
      const newItems = {
        id: uuidv4(),
        description,
        quantity,
        price,
        amount,
      }
      setDescription("")
      setQuantity("")
      setPrice("")
      setAmount("")
      setList([...list, newItems])
      setIsEditing(false)
    }
  }

  // Calculate items amount function
  useEffect(() => {
    const calculateAmount = (amount) => {
      setAmount(quantity * price)
    }

    //calculateAmount(amount)
  }, [amount, price, quantity, setAmount])

  // Calculate total amount of items in table
  useEffect(() => {
    // let rows = document.querySelectorAll(".amount")
    // let sum = 0

    // for (let i = 0; i < rows.length; i++) {
    //   if (rows[i].className === "amount") {
    //     sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
    //     setTotal(sum)
    //   }
    // }
  })

  // Edit function
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id)
    setList(list.filter((row) => row.id !== id))
    setIsEditing(true)
    setDescription(editingRow.description)
    setQuantity(editingRow.quantity)
    setPrice(editingRow.price)
  }

  // Delete function
  const deleteRow = (id) => setList(list.filter((row) => row.id !== id))

  return (
    <>
      <ToastContainer position="top-right" theme="colored" />
      <div className="md:grid grid-cols-3 gap-5">
          <label htmlFor="description">Total</label>
          <input
            type="text"
            name="total"
            id="total"
            placeholder="Total"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
          />
        </div>
      <form onSubmit={handleSubmit}>
    

        <div className="md:grid grid-cols-3 gap-10">
          <div className="flex flex-col">
            <label htmlFor="quantity">Monthly Collection</label>
            <input
              type="text"
              name="quantity"
              id="quantity"
              placeholder="Monthly Collection"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="price">Percentage</label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Percentage"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="mb-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
        >
          {isEditing ? "Editing Row Item" : "Add Table Item"}
        </button>
      </form>

      {/* Table items */}

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
                <td className="amount">{amount}</td>
                <td>
                  <button onClick={() => editRow(id)}>
                    <AiOutlineEdit className="text-green-500 font-bold text-xl" />
                  </button>
                </td>
                <td>
                  <button onClick={() => deleteRow(id)}>
                    <AiOutlineDelete className="text-red-500 font-bold text-xl" />
                  </button>
                </td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>

      <div>
        <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
          {currency} {total.toLocaleString()}
        </h2>
      </div>
    </>
  )
}
