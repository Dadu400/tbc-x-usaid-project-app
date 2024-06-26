import { GetSession } from "../../../../actions";
import ProfilePageLayout from "../../../../components/profile/ProfilePageLayout";
import UserInformation from "../../../../components/profile/UserInformation";
import { getTranslations } from 'next-intl/server';
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("MetaData");

  return {
    title: t("profileTitle"),
    description: t("profileDescription"),
  }
}

async function Profile() {
  const session = await GetSession();

  return (
    <ProfilePageLayout component={<UserInformation session={session} />} selectedMenuItem="profile" />
  );
}

export default Profile;
