import { Component } from "react";

import CollectionPreview from "../../components/collection-preview/collection-preview";
import SHOP_DATA from "../../data/shop";

import './shop.scss';

class ShopPage extends Component {
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