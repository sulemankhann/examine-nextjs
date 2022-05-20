import type { NextPage } from 'next';
import Link from 'next/link';

import LoginForm from 'components/auth/login/Form';
import SocialLogin from 'components/auth/login/Social';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import Seprator from 'components/ui/Seprator';

const Login: NextPage = () => {
  return (
    <>
      <Header />
      <section className="mb-[200px] px-6 pt-[30px] text-center xs:px-8 xs:pt-10 sm:px-16 md:mx-auto md:max-w-[640px] lg:mt-24 lg:rounded-3xl lg:p-14 lg:shadow-md xl:mt-[106px] 3xl:mb-[240px] 3xl:max-w-[649px] 3xl:rounded-[30px] 3xl:p-[75px]">
        <h2>Welcome back! 👋</h2>
        <p className="mt-[10px] text-gray-600 3xl:mt-[7px]">Let’s build someting great</p>

        <SocialLogin />

        <Seprator text="OR" className="mt-[21px]" />

        <LoginForm />

        <div className="mt-6 rounded-md border border-dashed border-secondary bg-secondary bg-opacity-10 px-[46px] py-[14px] text-center text-examine-green md:mt-[30px]">
          <h6 className="text-lg">
            <Link href="/auth/signup">Click Here</Link>
          </h6>
          <p className="text-sm">to sign up for the complete Examine Membership. Includes a free 2 week trial!</p>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Login;
