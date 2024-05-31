import React from 'react';
import Category from './Category';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

function Categories() {
    const categories = [
        { icon: <></>, name: 'Category 1', description: 'Description 1' },
        { name: 'Category 2', description: 'Description 2' },
        { name: 'Category 3', description: 'Description 3' },
        { name: 'Category 4', description: 'Description 4' },
        { name: 'Category 5', description: 'Description 5' },
        { name: 'Category 6', description: 'Description 6' },
    ];

    return (
        <div>
            <div className="w-[100%] m-auto flex flex-wrap gap-5">
                <Category icon={<FormatListBulletedIcon fontSize="large" />} name="ყველა კატეგორია" isAllCategory={true} />
                {categories.map((category, index) => (
                    <Category icon={<></>} key={index} name={category.name} />
                ))}
            </div>
        </div>
    );
}

export default Categories;