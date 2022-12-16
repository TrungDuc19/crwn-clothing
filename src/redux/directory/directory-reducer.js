import SECTIONS_DATA from "../../data/sections";

const INIT_STATE = {
    sections: SECTIONS_DATA
};

const directoryReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;