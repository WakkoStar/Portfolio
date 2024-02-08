import { DownloadWrapper } from '../../components/DownloadWrapper';

import universalisIcon from '../../assets/universalis/4/blue-star.jpg';

export const Universalis = () => (
  <DownloadWrapper
    backgroundColor="#010104"
    icon={universalisIcon}
    title="Universalis"
    links={{
      appStore: 'https://apps.apple.com/us/app/universalis-3d/id1660394625',
    }}
  />
);
