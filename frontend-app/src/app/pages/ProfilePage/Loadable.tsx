import { lazyLoad } from 'utils/loadable';

export const ProfilePage = lazyLoad(
  () => import('./index'),
  module => module.ProfilePage,
);
