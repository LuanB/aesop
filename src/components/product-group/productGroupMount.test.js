import React from 'react';
import  {shallow, mount} from 'enzyme';

import ProductGroup from './product-group.component';

let mountWrapper;

const dummyData = [
    {name: 'item 1',
    price: '$', 
    items: [{name: 'variant 1', price: '$10'}]},{name: 'item 2', items: [{name: 'variant 2'}]}]

    describe('Mount Product Group', () => {
    
        beforeEach(() => {
                 mountWrapper = mount(<ProductGroup items={dummyData} />);
     
              })
      
          afterEach(() => {
              jest.clearAllMocks();
            });
      
      
           it("renders", () => {
               shallow(<ProductGroup items={dummyData} />)
           }) 
      
       it("should render the ExpansionPanel, price", () => {
       
          const button = mountWrapper.find('button').at(0);
          expect(mountWrapper.find('button').at(0)).toExist()
          button.simulate('click');
      
          expect(mountWrapper.find('.ExpansionPanel')).toExist()
      
          expect(mountWrapper.find('.price')).toExist()
              
      })
       
      
      })