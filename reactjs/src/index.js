import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { store } from "./store"

import "./index.css"
import App from "./App"
import { Provider } from "react-redux"
import { ConfigProvider } from "antd"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#7cd354",
          borderRadius: 10,
        },
      }}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </ConfigProvider>
  </BrowserRouter>
)
