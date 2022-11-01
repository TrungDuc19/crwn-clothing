import React from "react";
import SHOP_DATA from "../../Data/Shop";
import CollectionPreview from "../../components/collection-preview/collection-preview";

import './shop.scss';

class ShopPage extends React.Component {
    constructor() {
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                {collections && collections.length &&
                    collections.map(({ id, ...otherCollectionProps }) => {
                        return (
                            <CollectionPreview key={id} {...otherCollectionProps} />
                        )
                    })}
            </div>
        )
    }
}

export default ShopPage;