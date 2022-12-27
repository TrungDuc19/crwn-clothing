import React from "react";
import { Link, useLocation } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item";

import './collection-preview.scss'

const CollectionPreview = ({ title, items, routeName }) => {
    const { pathname } = useLocation();
    return (
        <div className="collection-preview">
            <Link to={`${pathname}/${routeName}`} className="title">{title}</Link>
            <div className="preview">
                {
                    items?.filter((item, index) => index < 4)
                        .map(item => {
                            return (
                                <CollectionItem key={item.id} item={item} />
                            )
                        })
                }
            </div>
        </div>
    );
}

export default CollectionPreview;