import { useEffect, useState } from "react";

function Test() {
  const [message, setMessage] = useState('Ahmet');

  useEffect(() => {
    setTimeout(() => {
      setMessage('Mehmet')
    }, 300);
  }, [])
    return (
      <div>{message}</div>
    );
  }
  
export default Test;