import {mount} from '@vue/test-utils';
import row from '../components/row/index';

describe('row', () => {
  it('组件名称', () => {
    const vm = mount(row);
    expect(vm.name()).toBe('v-row');
  });
});
