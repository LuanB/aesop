import React, {useState, useEffect} from 'react';

import Accordion from './Accordion';
import Card from './Card';
import './App.css';

function App() {
  const [hasError, setErrors] = useState(false);
  const [products, setProducts] = useState(null);
  const [activeEventKey, setActiveEventKey] = useState(0);

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

  const Accordion = () => {
    const {categories} = products;
    return(
    <Accordion>
    {categories.map(({ name }, index) => (
      <Card key={index}>
        <Accordion.Toggle element={Card.Header} eventKey={index}>
          {index + 1}. {name}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={index} element={Card.Body}>
          {name}
        </Accordion.Collapse>
      </Card>
    ))}
  </Accordion>
  )
    }

  return (
    <div className="App">
    {products ? <Accordion/> : null}
    </div>
  );
}

export default App;
