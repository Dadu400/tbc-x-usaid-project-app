"use client";

import { useState } from 'react';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import localFont from '@next/font/local'

const mtavruli = localFont({ src: '../../public/fonts/mtavruli.ttf' })

function ExpandableFilter({ title, component, className }) {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={`w-full ${className}`}>
            <div onClick={toggleExpand} className="flex justify-between items-center cursor-pointer">
                <span className={`text-sm font-semibold ${mtavruli.className}`}>{title}</span>
                {expanded ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
            </div>
            {expanded && <div className="mt-[7px]">{component}</div>}
        </div>
    );
}

export default ExpandableFilter;