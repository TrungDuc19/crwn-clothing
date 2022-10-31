import React from "react";
import withRouter from "../../ReactV5/WithRouter";

import './menu-item.scss'

const MenuItem = (props) => {
    let { title, imageUrl, size, linkUrl, router: { location, navigate } } = props;
    return (
        <div
            className={`menu-item ${size}`}
            onClick={() => navigate(`${location.pathname}${linkUrl}`)}
        >
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            ></div>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);