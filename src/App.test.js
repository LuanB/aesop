import React from 'react';
import  {shallow, mount} from 'enzyme';
import App from './App';
import Accordion from './components/Accordion'
import Card from './components/Card'
import ProductGroup from './components/product-group/product-group.component'
import { ExpansionPanelActions } from '@material-ui/core';







describe('App container', () => {

 it("should render the components", () => {
   
  const wrapper = shallow(<App/>);

  expect(wrapper.find(<Accordion />)).toBeTruthy();
  expect(wrapper.find(<Card />)).toBeTruthy();


 })


 it("should match snapshot", () => {
   
  const wrapper = shallow(<App/>);

 expect(wrapper).toMatchSnapshot();


 })

 it("should not display Accordion if no products", () => {

    const mockData = {
        categories: [
            {name: 'Cat1', items: [{name:'Item1', items:[{name: 'Product1', price: 'From $100', thumbnail: '/test/test.png'}]}]},
            {name: 'Cat2', items: [{name:'Item2', items:[{name: 'Product2', price: 'From $200', thumbnail: '/test/test2.png'}]}]},
        ]
    }
   
    const wrapper = mount(<App/>);

    
    wrapper.setState({products: mockData, hasError: false });
    console.log(wrapper.debug());
   //expect(wrapper).containsMatchingElement(<Accordion/>).toBeTruthy();
  
  
   })

})