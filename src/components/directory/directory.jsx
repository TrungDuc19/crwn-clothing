import React from "react";

import MenuItem from "../menu-item/menu-item";
import SECTIONS_DATA from '../../Data/sections'

import './directory.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: SECTIONS_DATA
        }

    }

    render() {
        let { sections } = this.state;
        return (
            <div className="directory-menu">
                {sections && sections.length && sections.map(({ id, ...otherSectionProps }) => {
                    return (
                        <MenuItem key={id} {...otherSectionProps} />
                    )
                })}
            </div>
        )
    }
}

export default Directory;