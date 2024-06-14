import React from 'react'
import ProfilePageLayout from '../../../../../components/profile/ProfilePageLayout'
import BlogsList from '../../../../../components/blogs/BlogsList'

function BlogsPage() {
    return (
        <ProfilePageLayout component={<BlogsList />} selectedMenuItem="blogs" />
    )
}

export default BlogsPage;