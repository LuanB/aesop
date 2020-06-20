import React, {useState, useEffect} from 'react';

import './App.css';

function App() {
  const [hasError, setErrors] = useState(false);
  const [products, setProducts] = useState(null);

  async function fetchData() {
    const res = await fetch("/au/api/v1/nav/shop");
    res
      .json()
      .then(res => setProducts(res))
      .catch(err => setErrors(err));
     
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
     <div>testing</div>
     {products && console.log(products)}
    </div>
  );
}

export default App;
