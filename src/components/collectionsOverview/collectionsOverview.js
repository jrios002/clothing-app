import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PreviewCollection from '../previewCollection/previewCollection';
import { selectCollectionsForPreview } from '../../redux/shop/shopSelectors';
import './collectionsOverview.scss';

const CollectionsOverview = ({ collections }) => (
    <div className='collectionsOverview'>
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <PreviewCollection key={id} {...otherCollectionProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);