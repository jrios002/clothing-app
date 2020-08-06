import React from 'react';
import CollectionItem from '../collectionItem/collectionItem';
import './previewCollection.scss';

const PreviewCollection = ({ title, items }) => (
    <div className='previewCollection'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item, idx) => idx < 4)
                .map(( {id, ...otherItemProps} ) => (
                    <CollectionItem key={id} {...otherItemProps} />
                ))
            }
        </div>
    </div>
);

export default PreviewCollection;