import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import "./collection-page.scss";
import { selectShopCollection } from "../../redux/shop/shop-selector";
import CollectionItem from "../../components/collection-item/collection-item";


const CollectionPage = () => {
    const { collectionId } = useParams();
    const collection = useSelector(selectShopCollection(collectionId));
    const { title, items } = collection;

    return (
        <div className="collection-page grid">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items?.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    );
}

export default CollectionPage;