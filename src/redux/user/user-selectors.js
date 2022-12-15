import { createSelector } from "reselect";

const selectUser = state => state.user;

const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
);

export { selectCurrentUser };