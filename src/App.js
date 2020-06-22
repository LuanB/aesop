import React, {useState, useEffect} from 'react';

import Accordion from './components/Accordion';
import Card from './components/Card';
import ProductGroup from './components/product-group/product-group.component'
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
      .catch(err => setErrors(true));
     
  }

  useEffect(() => {
    fetchData();
  }, []);

  const ErrorComponent = () => {
    return (
      <div>handle Error occurred screen</div>
    )
  }

   const AccordionComponent = () => {
    const {categories} = products;
    
    console.log(products);
    return(
      hasError ? <ErrorComponent /> :

    <Accordion>
    {categories.map(({ name, items }, index) => (
      <Card key={index}>
        <Accordion.Toggle element={Card.Header} eventKey={index}>
          {index + 1}. {name}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={index} element={Card.Body}>
         <ProductGroup items={items} />

        </Accordion.Collapse>
      </Card>
    ))}
  </Accordion>
    
  )
    }

  return (
    <div className="App">
      <div>Aesop Accordion Coding Challenge </div>
    {products ? <AccordionComponent /> : null}
    </div>
  );
}

export default App;
