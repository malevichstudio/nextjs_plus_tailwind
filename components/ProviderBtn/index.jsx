import { signIn } from 'next-auth/react';
import {
  FaDiscord,
  // FaFacebook,
  FaGithub,
  FaGoogle,
  // FaSpotify,
  // FaTwitter
} from 'react-icons/fa';
import { SiAuth0 } from 'react-icons/si';

import { PATHS } from '@/common/constants';

const colors = {
  google: '#DB4437',
  // facebook: '#4285F4',
  auth0: '#eb5424',
  github: '#333',
  discord: '#7289da',
  // spotify: '#1DB954',
  // twitter: '#1DA1F2',
};

const getIcon = (id) => {
  switch (id) {
    case 'google':
      return <FaGoogle />;
    // case 'facebook':
    //   return <FaFacebook />;
    case 'auth0':
      return <SiAuth0 />;
    case 'github':
      return <FaGithub />;
    case 'discord':
      return <FaDiscord />;
    // case 'spotify':
    //   return <FaSpotify />;
    // case 'twitter(Leagcy)':
    //   return <FaTwitter />;
    default:
      return;
  }
};

export default function ProviderBtn({ id, label }) {
  const signInHandler = (e) => {
    e.preventDefault();
    signIn(id, { callbackUrl: PATHS.profile });
  };

  return (
    <button
      onClick={signInHandler}
      className='flex items-center justify-center gap-2 rounded-md p-2 font-semibold text-white'
      type='button'
      style={{ background: colors[id] }}
    >
      {getIcon(id)}
      {label}
    </button>
  );
}
