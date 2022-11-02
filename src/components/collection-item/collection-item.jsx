import React from "react";

import withRouter from "../../ReactV5/WithRouter";

import './collection-item.scss'

const CollectionItem = (props) => {
    const { name, price, imageUrl } = props;
    console.log(imageUrl);
    return (
        <div className="collection-item">
            <div
                className="image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        </div>
    )
}

export default withRouter(CollectionItem);