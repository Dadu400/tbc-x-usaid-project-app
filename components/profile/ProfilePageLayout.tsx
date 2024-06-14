import React from 'react'
import UserProfileMenu from './UserProfileMenu'
import DashboardLayout from '../../app/[locale]/(dashboard)/DashboardLayout'

function ProfilePageLayout({ component, selectedMenuItem }) {
    return (
        <DashboardLayout>
            <div className="w-[60vw] m-auto flex justify-between gap-[20px] my-[20px]">
                <div style={{ flex: "1" }}>
                    <UserProfileMenu
                        selectedItem={selectedMenuItem}
                    />
                </div>
                <div style={{ flex: "3" }}>
                    {component}
                </div>
            </div>
        </DashboardLayout>
    )
}

export default ProfilePageLayout