import React from 'react';
import Heading from '@tds/core-heading';
import Card from '@tds/core-card';
import Box from '@tds/core-box';
import PriceLockup from '@tds/core-price-lockup';
import Image from '@tds/core-image';
import HairlineDivider from '@tds/core-hairline-divider';
import Resources from '../../../Constants/Resources';
import Text from '@tds/core-text';
import Button from '@tds/core-button';

const DeviceCard = ({ brandName, productName, price, image }) => {
  return (
    <Card fullHeight>
      <Box between={2}>
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
        />
        <Heading level="h3" id="device-card-brand-name">{brandName}</Heading>
        <Heading level="h2" tag="h3" id="device-card-product-name">
          {productName}
        </Heading>
        <PriceLockup
          size="small"
          price={price}
          signDirection="left"
          id
        />
        <Button className="paddingSmall">{Resources.BUTTON_ADD_TO_CART}</Button>
        <HairlineDivider />
        <Text size="small">{Resources.SAHRED_TELUS_EASY_PAYMENT_APPLIED}<sup>3</sup><br></br>{Resources.SHARED_TAXES_DUE_PAYMENT}</Text>
        <Text size="small">{Resources.SHARED_RETAIL_PRICE}{price}</Text>
        
      </Box>
    </Card>
  )
}

export default DeviceCard;