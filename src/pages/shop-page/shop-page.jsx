import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import './shop-page.scss';
import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection-page/collection-page';
import Spinner from '../../components/spinner/spinner';
import { selectShopCollectionFetching, selectShopCollectionLoaded } from '../../redux/shop/shop-selector';
import { fetchCollectionsStart } from '../../redux/shop/shop-actions';

const ShopPage = ({ fetchCollectionsStart, isFetching, isLoaded }) => {
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);

    return (
        <div className="shop-page">
            <Routes>
                <Route path="/" element={isFetching ? <Spinner /> : <CollectionsOverview />} />
                <Route path=":collectionId" element={!isLoaded ? <Spinner /> : <CollectionPage />} />
            </Routes>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    isFetching: selectShopCollectionFetching,
    isLoaded: selectShopCollectionLoaded
});

const mapDispatchToProps = dispacth => ({
    fetchCollectionsStart: () => dispacth(fetchCollectionsStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);