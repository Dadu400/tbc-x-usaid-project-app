import React from 'react';
import Rating from '@mui/material/Rating';

function RatingFilter() {
    return (
        <div>
            <Rating
                name="rating-filter"
                defaultValue={5}
                precision={0.5}
            />
        </div>
    );
}

export default RatingFilter;