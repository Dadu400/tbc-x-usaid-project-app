import React from 'react'
import UserProfileMenu from './UserProfileMenu'
import DashboardLayout from '../../app/[locale]/(dashboard)/DashboardLayout'
import SwiperUserProfileMenu from './SwiperUserProfileMenu';

function ProfilePageLayout({ component, selectedMenuItem }: { component: React.ReactNode; selectedMenuItem: string }) {
    return (
        <DashboardLayout>
            <div className="w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[65%] m-auto flex flex-col md:flex-row justify-between gap-[20px] my-[20px]">
                <div className="hidden md:flex h-[100%]" style={{ flex: "1" }}>
                    <UserProfileMenu
                        selectedItem={selectedMenuItem}
                    />
                </div>
                <div className="md:hidden">
                    <SwiperUserProfileMenu
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