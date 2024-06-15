import { GetSession } from "../../../../actions";
import ProfilePageLayout from "../../../../components/profile/ProfilePageLayout";
import UserInformation from "../../../../components/profile/UserInformation";

async function Profile() {
  const session = await GetSession();

  return (
    <ProfilePageLayout component={<UserInformation session={session} />} selectedMenuItem="profile" />
  );
}

export default Profile;
