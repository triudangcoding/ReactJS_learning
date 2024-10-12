import { useState } from 'react';
export default function Nummber() {
  const [number, setNumber] = useState({
    name: "Trieu",
    age: 50
  });
  return (
   <>
    <h4>{name}</h4>
    <h4>{number}</h4>
    <button onClick={() => (setNumber(name))}></button>
   </>
  )
}
