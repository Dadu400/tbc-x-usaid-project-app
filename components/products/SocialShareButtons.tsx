// components/SocialShareButtons.tsx
"use client";

import React from 'react';
import { FacebookShareButton, TwitterShareButton, PinterestShareButton, EmailShareButton, FacebookIcon, TwitterIcon, PinterestIcon, EmailIcon } from 'react-share';

interface SocialShareButtonsProps {
    shareUrl: string;
    title: string;
    imageUrl: string;
}

const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({ shareUrl, title, imageUrl }) => {
    return (
        <div className="flex gap-3 mt-5">
            <FacebookShareButton url={shareUrl} hashtag={title}>
                <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl} title={title}>
                <TwitterIcon size={32} round />
            </TwitterShareButton>
            <PinterestShareButton url={shareUrl} media={imageUrl} description={title}>
                <PinterestIcon size={32} round />
            </PinterestShareButton>
            <EmailShareButton url={shareUrl} subject={title} body={`Check out this product: ${title} at ${shareUrl}`}>
                <EmailIcon size={32} round />
            </EmailShareButton>
        </div>
    );
};

export default SocialShareButtons;
