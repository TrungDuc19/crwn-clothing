import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./collections-overview.scss";
import CollectionPreview from "../collection-preview/collection-preview";
import { selectShopCollections } from "../../redux/shop/shop-selector";

const CollectionsOverview = ({ collections }) => {
    console.log({ collections });
    return (
        <div className="collections-overview">
            {
                collections?.map(({ id, ...otherCollectionProps }) => {
                    return (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    )
                })
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})

export default connect(mapStateToProps, null)(CollectionsOverview);