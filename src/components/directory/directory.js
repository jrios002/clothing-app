import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySelections } from '../../redux/directory/directorySelectors';
import MenuItem from '../menuItem/menuItem';
import './directory.scss';

const Directory = ({ sections }) => (
    <div className = 'directoryMenu'>
        {
            sections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySelections
});

export default connect(mapStateToProps)(Directory);