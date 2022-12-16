import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import "./collection-page.scss";
import { selectShopCollection } from "../../redux/shop/shop-selector";
import CollectionItem from "../../components/collection-item/collection-item";


const CollectionPage = () => {
    const { collectionId } = useParams();
    const { title, items } = useSelector(selectShopCollection(collectionId));

    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items?.map(item => (
                        <CollectionItem key={item.key} item={item} />
                    ))
                }
            </div>
        </div>

    );
}

export default CollectionPage;