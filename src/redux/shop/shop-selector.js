import { createSelector } from "reselect";

const selectShop = state => state.shop;

const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

const selectShopCollection = collectionUrlParam => createSelector(
    [selectShopCollections],
    collections => collections.find(collection => collection.routeName === collectionUrlParam)
);

const selectShopCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

const selectShopCollectionLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
);

export {
    selectShop,
    selectShopCollections,
    selectShopCollection,
    selectShopCollectionFetching,
    selectShopCollectionLoaded
};