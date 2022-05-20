import { useRouter } from 'next/router';
import AppleIcon from 'public/icons/social/apple.svg';
import GoogleIcon from 'public/icons/social/google.svg';

import SocialAuth from '../Social';

const SocialSignup = () => {
  const router = useRouter();
  const googleSignupHandler = () => {
    router.push('/');
  };

  const facebookSignupHandler = () => {
    router.push('/');
  };

  const appleSignupHandler = () => {
    router.push('/');
  };
  return (
    <SocialAuth
      wrapperClass="mt-[25px] 3xl:mt-10"
      socialPlatforms={[
        { onClick: googleSignupHandler, Child: GoogleIcon },
        { onClick: appleSignupHandler, Child: AppleIcon },
        { onClick: facebookSignupHandler, Child: 'f' },
      ]}
    />
  );
};

export default SocialSignup;
