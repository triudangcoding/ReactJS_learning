import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

function Ex1()
{
  return(
    <div>
      <h2 className="title">Simple no-tricks pricing</h2>
      <hr />
      <a href="/buy" className="button">
        Buy Now <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}


createRoot(document.getElementById("root")).render(<Ex1 />);