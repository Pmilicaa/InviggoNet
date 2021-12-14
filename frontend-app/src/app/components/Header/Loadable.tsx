/**
 * Asynchronously loads the component for NotFoundPage
 */

import { lazyLoad } from 'utils/loadable';

export const Header = lazyLoad(
  () => import('./index'),
  module => module.Header,
);
