import {mount} from '@vue/test-utils';
import row from '../components/row/index';

describe('row', () => {
  it('组件名称', () => {
    const vm = mount(row);
    expect(vm.name()).toBe('v-row');
  });

  it('props-gutter', ()=>{
    const vm = mount(row, {
      propsData: {
        gutter: 1,
      },
    });
    expect(vm.props().gutter).toBe(1);
  });

  it('props-type', ()=>{
    const vm = mount(row, {
      propsData: {
        type: 'flex',
      },
    });
    expect(vm.props().type).toBe('flex');
  });

  it('props-justify', ()=>{
    let list = ['', 'start', 'end', 'center', 'space-around', 'space-between'];
    list.forEach((element)=>{
      const vm = mount(row, {
        propsData: {
          justify: element,
        },
      });
      expect(vm.props().justify).toBe(element);
    });
  });

  it('props-align', ()=>{
    let list = ['', 'top', 'middle', 'bottom'];
    list.forEach((element)=>{
      const vm = mount(row, {
        propsData: {
          align: element,
        },
      });
      expect(vm.props().align).toBe(element);
    });
  });
});
