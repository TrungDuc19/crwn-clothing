import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './directory.scss';
import MenuItem from "../menu-item/menu-item";
import { selectDirectorySections } from '../../redux/directory/directory-selectors';

const Directory = ({ sections }) => (
    <div className="directory">
        <div className='directory-container grid'>
            {
                sections?.map(({ id, ...otherSectionProps }) => {
                    return (
                        <MenuItem key={id} {...otherSectionProps} />
                    )
                })
            }
        </div>
    </div>
);


const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps, null)(Directory);