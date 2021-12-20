import { Profile } from 'app/components/Profile/Profile';
import { Helmet } from 'react-helmet-async';

export function ProfilePage() {
  return (
    <>
      <Helmet>Profile</Helmet>
      <Profile />
    </>
  );
}
