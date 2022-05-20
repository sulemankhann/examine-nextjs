import { useRouter } from 'next/router';
import AppleIcon from 'public/icons/social/apple.svg';
import GoogleIcon from 'public/icons/social/google.svg';

import SocialAuth from '../Social';

const SocialLogin = () => {
  const router = useRouter();
  const googleLoginHandler = () => {
    router.push('/');
  };

  const facebookLoginHandler = () => {
    router.push('/');
  };

  const appleLoginHandler = () => {
    router.push('/');
  };

  return (
    <SocialAuth
      wrapperClass="mt-[25px] 3xl:mt-10"
      socialPlatforms={[
        { onClick: googleLoginHandler, Child: GoogleIcon },
        { onClick: appleLoginHandler, Child: AppleIcon },
        { onClick: facebookLoginHandler, Child: 'f' },
      ]}
    />
  );
};

export default SocialLogin;
