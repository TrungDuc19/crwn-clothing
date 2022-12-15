import { useNavigate } from "react-router-dom";

import './menu-item.scss'

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
    const navigate = useNavigate();
    return (
        <div
            className={`menu-item ${size}`}
            onClick={() => navigate(`/${linkUrl}`)}
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

export default MenuItem;