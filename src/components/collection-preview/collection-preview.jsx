import React from "react";

import withRouter from "../../ReactV5/WithRouter";
import CollectionItem from "../collection-item/collection-item";

import './collection-preview.scss'

const CollectionPreview = (props) => {
    const { title, items } = props;
    return (
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {items && items.length &&
                    items.filter((item, index) => index < 4)
                        .map(({ id, ...otherItemProps }) => {
                            return (
                                <CollectionItem key={id} {...otherItemProps} />
                            )
                        })}
            </div>
        </div>
    )
}

export default withRouter(CollectionPreview);