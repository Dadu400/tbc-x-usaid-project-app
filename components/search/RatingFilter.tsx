import React from 'react';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

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