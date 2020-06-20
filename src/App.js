import React, {useState, useEffect} from 'react';

import './App.css';

function App() {
  const [hasError, setErrors] = useState(false);
  const [products, setProducts] = useState({});

  async function fetchData() {
    const res = await fetch("https://www.aesop.com/au/api/v1/nav/shop");
    res
      .json()
      .then(res => setProducts(res))
      .catch(err => setErrors(err));
      console.log("data is ", products)
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
