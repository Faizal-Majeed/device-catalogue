import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {mount, configure} from 'enzyme';
import App from '../components/App';
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import IPhones from '../components/IPhones';
import Watches from '../components/Watches';

describe('Application routes', () => {
  it('should render a Home component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(Home)).toHaveLength(1);
  });

  it('should render a iPhone component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/iPhones']}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(IPhones)).toHaveLength(1);
  });

  it('should render a Watches component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/watches']}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(Watches)).toHaveLength(1);
  });

  it('should render a Notfound component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/foo']}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(NotFound)).toHaveLength(1);
  });
});
