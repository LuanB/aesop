import React from 'react';
import  {shallow} from 'enzyme';
import App from './App';
import Accordion from './components/Accordion'
import Card from './components/Card'

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


})