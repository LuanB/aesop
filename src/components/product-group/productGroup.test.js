import React from 'react';
import  {shallow, mount} from 'enzyme';
import Button from '@material-ui/core/Button';


import ProductGroup from './product-group.component';


let wrapper;
let instance;
let mountWrapper;
let mountInstance;

const dummyData = [
    {name: 'item 1',
    price: '$', 
    items: [{name: 'variant 1', price: '$10'}]},{name: 'item 2', items: [{name: 'variant 2'}]}]

 
describe('Product Group', () => {


     const setState = jest.fn();
   const useStateSpy = jest.spyOn(React, 'useState')
   useStateSpy.mockImplementation((init) => [init, setState]);
   
  beforeEach(() => {
        wrapper = shallow(<ProductGroup items={dummyData} />);
        mountWrapper = mount(<ProductGroup items={dummyData} />);

        instance = wrapper.instance();

        mountInstance = mountWrapper.instance();
    
    })

    afterEach(() => {
        jest.clearAllMocks();
      });


     it("renders", () => {
         shallow(<ProductGroup items={dummyData} />)
     }) 


 it("should render the Item Container", () => {
   
    expect(wrapper.find('ItemContainer')).toBeTruthy()

  
 })


 it("should render the Item buttons", () => {
  
   expect(wrapper.find(<Button />)).toBeTruthy()
  
 })

 it("should render correct number of Item buttons", () => {
  
    expect(wrapper.find('.makeStyles-margin-1')).toHaveLength(2)
   
  })

  it("should calls the handler", () => {
     
  
    const logSpy = jest.spyOn(console, 'log');
    const button = wrapper.find('WithStyles(ForwardRef(Button))').at(1);
    expect(wrapper.find('WithStyles(ForwardRef(Button))')).toHaveLength(2)
    
    button.simulate('click');
    expect(logSpy).toHaveBeenCalled();



  })

  it("handler should call setItemsVariant and setChecked", () => {
   
    const button = wrapper.find('WithStyles(ForwardRef(Button))').at(1);
    button.simulate('click');
    expect(setState).toHaveBeenCalledTimes(2);

})


}


)




