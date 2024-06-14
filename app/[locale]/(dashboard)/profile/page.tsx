import { GetSession } from "../../../../actions";
import ProfilePageLayout from "../../../../components/profile/ProfilePageLayout";
import UserInformation from "../../../../components/profile/UserInformation";

async function Profile() {
  const session = await GetSession();
  console.log("Session:");
  console.log(session);

  return (
    <ProfilePageLayout component={<UserInformation session={session} />} selectedMenuItem="profile" />
  );
}

export default Profile;
