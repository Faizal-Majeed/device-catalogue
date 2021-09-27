import React from 'react';
import FlexGrid from '@tds/core-flex-grid';
import DeviceCard from './DeviceCard';

const DeviceGrid = ({ deviceData, deviceImage }) => {

  return (
    <FlexGrid>
      <FlexGrid.Row>
        {
          deviceData.map((device, index) => {
            const { brand, name, price } = device;
            return (
              <FlexGrid.Col key={index} xs={12} md={4}>
                <DeviceCard brandName={brand} productName={name} price={price} image={deviceImage} />
              </FlexGrid.Col>
            )
          })
        }
      </FlexGrid.Row>
    </FlexGrid>
  )
}

export default DeviceGrid;