
// import App from '../src/App';
import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Form from './Form';



function Main() {
    return (
        <>  
        <Header />  
        <Form />  
    </>  
    );
}


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Main/>
    </React.StrictMode>

);



