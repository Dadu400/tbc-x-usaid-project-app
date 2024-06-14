import React from 'react'
import ProfilePageLayout from '../../../../../components/profile/ProfilePageLayout';
import ChangePassword from '../../../../../components/profile/ChangePassword';

function PasswordPage() {
    return (
        <ProfilePageLayout component={<ChangePassword />} selectedMenuItem="password" />
    )
}

export default PasswordPage;