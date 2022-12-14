import React from "react";

import CollectionItem from "../collection-item/collection-item";

import './collection-preview.scss'

const CollectionPreview = (props) => {
    const { title, items } = props;
    return (
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {items && items.length &&
                    items
                        .filter((item, index) => index < 4)
                        .map(item => {
                            return (
                                <CollectionItem key={item.id} item={item} />
                            )
                        })
                }
            </div>
        </div>
    )
}

export default CollectionPreview;