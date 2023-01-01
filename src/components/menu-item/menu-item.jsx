import { useNavigate } from "react-router-dom";

import './menu-item.scss'

const MenuItem = ({ title, imageUrl, linkUrl }) => {
    const navigate = useNavigate();
    return (
        <div
            className='menu-item'
            onClick={() => navigate(`/${linkUrl}`)}
        >
            <div className="menu-item-container">
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
        </div>
    )
}

export default MenuItem;