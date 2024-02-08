import { DownloadWrapper } from '../../components/DownloadWrapper';

import skateRiderIcon from '../../assets/skaterider/4/skate-icon.jpg';

export const SkateRider = () => (
  <DownloadWrapper
    backgroundColor="#FC6C6C"
    icon={skateRiderIcon}
    title="Skate Rider"
    links={{
      googlePlay:
        'https://play.google.com/store/apps/details?id=com.Carbone.SkateRider',
      appStore: 'https://apps.apple.com/us/app/skate-rider/id1660363826',
    }}
  />
);
