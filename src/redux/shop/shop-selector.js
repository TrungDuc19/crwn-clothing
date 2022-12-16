import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    women: 4,
    men: 5
}

const selectShop = state => state.shop;

const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

const selectShopCollection = collectionUrlParam => createSelector(
    [selectShopCollections],
    collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
);

export { selectShop, selectShopCollections, selectShopCollection };