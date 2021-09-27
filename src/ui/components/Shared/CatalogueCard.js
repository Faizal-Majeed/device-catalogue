import React from 'react';
import Heading from '@tds/core-heading';
import Card from '@tds/core-card';
import Box from '@tds/core-box';
import Image from '@tds/core-image';
import PriceLockup from '@tds/core-price-lockup';
import HairlineDivider from '@tds/core-hairline-divider';
import Resources from '../../../Constants/Resources';
import ChevronLink from '@tds/core-chevron-link';

const CatalogueCard = ({ brand, productName, route, imageSource, altText, price }) => {
  return (
    <Card variant="defaultWithBorder">
      <Box horizontal={4} between={2} vertical={2}>
        <div className="align-center">
          <Image
            src={imageSource}
            width={100}
            height={100}
            alt={altText}
          />
        </div>
        <Heading level="h3">{brand}</Heading>
        <Heading level="h2" tag="h3">{productName}</Heading>
        <PriceLockup
          size="small"
          topText={Resources.SHARED_STARTING_AT}
          price={price}
          signDirection="left"
        />
        <HairlineDivider />
        <ChevronLink href={route}>{Resources.SHARED_LEARN_MORE}</ChevronLink>
      </Box>
    </Card>
  )
}

export default CatalogueCard;