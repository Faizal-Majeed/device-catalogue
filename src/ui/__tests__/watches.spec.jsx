import React from 'react';
import Watches from '../components/Watches';
import axios from 'axios';
import renderer, { act } from 'react-test-renderer';

const mockData = [
    {
      name: 'Apple Watch Series 6',
      brand: 'Apple',
      price: 529
    },
    {
      name: 'Apple Watch SE',
      brand: 'Apple',
      price: 369
    },
    {
      name: 'Apple Watch Series 3',
      brand: 'Apple',
      price: 259
    }
  ];

describe('Watches Page', () => {

    it('should render the watch page', () => {
        const axiosGetSpy = jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: { data: mockData } });
        let component;
        act(() => {
        component = renderer.create(<Watches></Watches>);
        });
        expect(axiosGetSpy).toBeCalledWith('http://localhost:8081/watches/');
        axiosGetSpy.mockRestore();
    });
});