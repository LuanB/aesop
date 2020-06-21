import React from 'react';
import { render } from '@testing-library/react';

import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import Accordion from './components/Accordion'
import Card from './components/Card'
import ProductGroup from './components/product-group/product-group.component'
import { ExpansionPanelActions } from '@material-ui/core';


Enzyme.configure({ adapter: new Adapter() });





describe('App container', () => {

 it("should render the components", () => {
   
  const wrapper = shallow(<App/>);

  expect(wrapper.find(<Accordion />)).toBeTruthy();


 })

})