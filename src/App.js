import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { About, ScrollToTop, SuggestionBox } from "./pages"
import Invoice from "./components/App"
import { Error } from "./pages"
import ThankYou from "./pages/ThankYou"
import Cancelled from "./pages/Cancelled"

export default function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
           
                <Invoice />
             
            </React.Fragment>
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/suggestion-box" element={<SuggestionBox />}></Route>
        <Route path="/thank-you" element={<ThankYou />}></Route>
        <Route path="/cancelled" element={<Cancelled />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
