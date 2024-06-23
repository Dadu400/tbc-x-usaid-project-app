import ProfilePageLayout from '../../../../../components/profile/ProfilePageLayout';
import ChangePassword from '../../../../../components/profile/ChangePassword';
import { getTranslations } from 'next-intl/server';
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("MetaData");

    return {
        title: t("passwordTitle"),
        description: t("passwordDescription"),
    }
}

function PasswordPage() {
    return (
        <ProfilePageLayout component={<ChangePassword />} selectedMenuItem="password" />
    )
}

export default PasswordPage;