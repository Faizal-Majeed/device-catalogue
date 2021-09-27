import React, { Fragment, useState, useEffect } from 'react';
import Heading from '@tds/core-heading';
import axios from 'axios';
import ChevronLink from '@tds/core-chevron-link';
import FlexGrid from '@tds/core-flex-grid';
import Resources from '../../../Constants/Resources';
import HairlineDivider from '@tds/core-hairline-divider';
import Box from '@tds/core-box';
import iPhoneImg from '../../../../public/images/iphone.jpg';
import DeviceGrid from '../shared/DeviceGrid';

const IPhones = () => {
    const [iphoneData, setIPhoneData] = useState([]);
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:8081/iphones/").then(res => {
          setIPhoneData(res.data.data);
          setFetching(false);
        }).catch(err => {
          console.log(err);
          setFetching(false);
        });
      }, []);

    return (
        <Fragment>
            <FlexGrid>
                <FlexGrid.Row>
                    <FlexGrid.Col>
                        <div className="paddingSmall align-center"> 
                            <Heading level="h1">{Resources.IPHONES_APPLE_IPHONES}</Heading>
                        </div>
                    </FlexGrid.Col>
                </FlexGrid.Row>
                <HairlineDivider gradient />
                <FlexGrid.Row>
                    <FlexGrid.Col horizontalAlign="left">
                        <Box vertical={3}>
                            <ChevronLink href="/" direction="left">
                                {Resources.SHARED_BACK_TO_THE_DEVICE_CATALOGUE}
                            </ChevronLink>
                        </Box>
                    </FlexGrid.Col>
                    <FlexGrid.Col horizontalAlign="right">
                        <Box vertical={3}>
                            <ChevronLink href="/watches" direction="right">
                                {Resources.IPHONES_BROWSE_APPLE_WATCHES}
                            </ChevronLink>
                        </Box>
                    </FlexGrid.Col>
                </FlexGrid.Row>
            </FlexGrid>
            {
                !fetching ? (
                <Fragment>
                    <DeviceGrid deviceData={iphoneData} deviceImage={iPhoneImg} />
                </Fragment>
                ) : null
            }
        </Fragment>
    );
}

export default IPhones;