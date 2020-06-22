import React from 'react';
import  {shallow, mount} from 'enzyme';
import Button from '@material-ui/core/Button';


import ProductGroup from './product-group.component';


let wrapper;
let instance;
let mountWrapper;
let mountInstance;

const dummyData = [{name: 'item 1'},{name: 'item 2'}]


    beforeEach(() => {
        wrapper = shallow(<ProductGroup items={dummyData} />);
        mountWrapper = mount(<ProductGroup items={dummyData} />);

        instance = wrapper.instance();

        mountInstance = mountWrapper.instance();
    
    })

describe('Product Group', () => {
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
      console.log(wrapper.debug())
  
    const logSpy = jest.spyOn(console, 'log');
    const button = wrapper.find('WithStyles(ForwardRef(Button))').at(1);
    expect(wrapper.find('WithStyles(ForwardRef(Button))')).toHaveLength(2)
    
    button.simulate('click');
    expect(logSpy).toHaveBeenCalled();



  })

  it("handler should call setItemsVariant with correct items", () => {
    console.log(wrapper.debug())

  const logSpy = jest.spyOn(instance, 'setItemsVariant');
  const button = wrapper.find('WithStyles(ForwardRef(Button))').at(1);
  expect(wrapper.find('WithStyles(ForwardRef(Button))')).toHaveLength(2)
  
  button.simulate('click');
  expect(logSpy).toHaveBeenCalled();



})
 



}


)