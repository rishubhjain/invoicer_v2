import { useState, useRef, useEffect } from "react";
import ClientDetails from "./ClientDetails";
import Dates from "./Dates";
import Header from "./Header";
import MainDetails from "./MainDetails";
import Notes from "./Notes";
import Table from "./Table";
import TableForm from "./TableForm";
import TableBilling from "./TableBilling";
import TableFormBilling from "./TableFormBilling";
import ReactToPrint from "react-to-print";


function App() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [currency, setCurrency] = useState("");
  
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [notes, setNotes] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [descriptionBilling, setDescriptionBilling] = useState("");
  const [quantityBilling, setQuantityBilling] = useState("");
  const [priceBilling, setPriceBilling] = useState("");
  const [amountBilling, setAmountBilling] = useState("");
  const [listBilling, setListBilling] = useState([]);
  const [totalBilling, setTotalBilling] = useState(0);
  const [width] = useState(641);
  // const [invoices, setInvoices] = useState([]);

  const componentRef = useRef();

  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    if (window.innerWidth < width) {
      alert("Place your phone in landscape mode for the best experience");
    }
  }, [width]);

  return (
    <>
      <main
        className="m-5 p-5 xl:grid grid-cols-2 gap-10 xl:items-start"
        style={{
          maxWidth: "1920px",
          margin: "auto",
        }}
      >
        <section>
          <div className="bg-white p-5 rounded shadow">
            {/* name, address, email, phone, bank name, bank account number, website client name, client address, invoice number, invoice date, due date, notes */}
            <div className="flex flex-col justify-center">
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="name">Your full name</label>
                  <input
                    type="text"
                    name="text"
                    id="name"
                    placeholder="Enter your name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="address">Enter your address</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter your address"
                    autoComplete="off"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </article>


              <article className="md:grid grid-cols-2 gap-10 md:mt-16">
                <div className="flex flex-col">
                  <label htmlFor="clientName">Enter your client's name</label>
                  <input
                    type="text"
                    name="clientName"
                    id="clientName"
                    placeholder="Enter your client's name"
                    autoComplete="off"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="clientAddress">
                    Additional Details
                  </label>
                  <textarea
                    type="text"
                    name="clientAddress"
                    id="clientAddress"

                    placeholder="Enter your client's address"
                    autoComplete="off"
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="invoiceNumber">Invoice Number</label>
                  <input
                    type="text"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    placeholder="Invoice Number"
                    autoComplete="off"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="invoiceDate">Invoice Date</label>
                  <input
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    placeholder="Invoice Date"
                    autoComplete="off"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />
                </div>


                <div className="flex flex-col">
                  <label htmlFor="Currency">Currency</label>
                  <input
                    type="text"
                    name="Currency"
                    id="Currency"
                    placeholder="Currency"
                    autoComplete="off"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                  />
                </div>

              </article>
              <label>Back Office</label>
                            <article>
                <TableForm
                  description={description}
                  setDescription={setDescription}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  price={price}
                  setPrice={setPrice}
                  amount={amount}
                  setAmount={setAmount}
                  list={list}
                  setList={setList}
                  total={total}
                  setTotal={setTotal}
                  currency={currency}
                />
              </article>
              <label>Billing</label>

              <article>
                <TableFormBilling
                  description={descriptionBilling}
                  setDescription={setDescriptionBilling}
                  quantity={quantityBilling}
                  setQuantity={setQuantityBilling}
                  price={priceBilling}
                  setPrice={setPriceBilling}
                  amount={amountBilling}
                  setAmount={setAmountBilling}
                  list={listBilling}
                  setList={setListBilling}
                  total={totalBilling}
                  setTotal={setTotalBilling}
                  currency={currency}

                />
              </article>

              <label htmlFor="notes">Additional Notes</label>
              <textarea
                name="notes"
                id="notes"
                cols="30"
                rows="5"
                placeholder="Additional notes to the client"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>

            </div>
          </div>

        </section>

        {/* Invoice Preview */}
        <div className="invoice__preview bg-white p-5 rounded" style={{zIndex:'1000'}}>
          <ReactToPrint
            trigger={() => (
              <button className="bg-blue-500 ml-5 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
                Print / Download
              </button>
            )}
            content={() => componentRef.current}
          />
          <div ref={componentRef} className="p-3" style={{backgroundImage:'../assests/1.png',backgroundSize:'covert',backgroundRepeat:'no-repeat'}}>
            <Header handlePrint={handlePrint} />

            <MainDetails name={name} address={address} />

            <div className="flex justify-between">
        <div className="w-1/2">
          <ClientDetails
            clientName={clientName}
            clientAddress={clientAddress}
          />
        </div>
        <div className="w-1/2">
          <Dates
            invoiceNumber={invoiceNumber}
            invoiceDate={invoiceDate}
            dueDate={''}
          />
        </div>
      </div>


            <label>Back Office</label>
            <Table
              description={description}
              quantity={quantity}
              price={price}
              amount={amount}
              list={list}
              setList={setList}
              total={total}
              setTotal={setTotal}
              currency={currency}
            />
            <label>Billing</label>

            <TableBilling
              description={descriptionBilling}
              quantity={quantityBilling}
              price={priceBilling}
              amount={amountBilling}
              list={listBilling}
              setList={setListBilling}
              total={totalBilling}
              setTotal={setTotalBilling}
              currency={currency}

            />
            <Notes notes={notes} />

          </div>
     
        </div>
      </main>
    </>
  );
}

export default App;
