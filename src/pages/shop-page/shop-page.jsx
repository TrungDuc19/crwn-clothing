import { Route, Routes } from 'react-router-dom';

import './shop-page.scss';
import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection-page/collection-page';

const ShopPage = () => (
    <div className="shop-page">
        <Routes>
            <Route path="/" element={<CollectionsOverview />} />
            <Route path=":collectionId" element={<CollectionPage />} />
        </Routes>
    </div>
);

export default ShopPage;