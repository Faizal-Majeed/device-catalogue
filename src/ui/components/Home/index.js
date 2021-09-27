import React, { Fragment } from 'react';
import DisplayHeading from '@tds/core-display-heading';
import Resources from '../../../Constants/Resources';
import FlexGrid from '@tds/core-flex-grid';
import CatalogueCard from '../Shared/CatalogueCard';
import iPhoneImg from '../../../../public/images/iphone.jpg';
import watchImg from '../../../../public/images/watch.jpg';

const Home = () => {

    // Device information to pass into the CatalogueCard Component
    const devices = [
        {
            image: iPhoneImg,
            route: "/iphones",
            brandName: Resources.SHARED_APPLE,
            productName: Resources.SHARED_IPhone,
            altText: "Apple iPhone",
            price: "599",
        },
        {
            image: watchImg,
            route: "/watches",
            brandName: Resources.SHARED_APPLE,
            productName: Resources.SHARED_Watche,
            altText: "Apple Watch",
            price: "259",
        }
    ];
    return (
        <Fragment>
            <FlexGrid>
                <FlexGrid.Row>
                    <FlexGrid.Col>
                        <div className="paddingSmall align-center">
                            <DisplayHeading>{Resources.HOME_APP_TITLE}</DisplayHeading>
                        </div>
                    </FlexGrid.Col>
                </FlexGrid.Row>
            </FlexGrid>

            <FlexGrid limitWidth>
                <FlexGrid.Row>
                {
                    devices.map((device, index) => {
                    const { brandName, productName, route, image, altText, price, retailPrice } = device;
                    return (
                        <FlexGrid.Col key={index} xs={6} md={4}>
                        <CatalogueCard
                            key={index}
                            brand={brandName}
                            productName={productName}
                            route={route}
                            imageSource={image}
                            altText={altText}
                            price={price}
                            retailPrice={retailPrice}
                        />
                        </FlexGrid.Col>
                    )
                    })
                }
                </FlexGrid.Row>
            </FlexGrid>
        </Fragment>
    );
};

export default Home;
