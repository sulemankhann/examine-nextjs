import type { NextPage } from 'next';

import SignupForm from 'components/auth/signup/Form';
import SocialSignup from 'components/auth/signup/Social';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import Seprator from 'components/ui/Seprator';

const Signup: NextPage = () => {
  return (
    <>
      <Header />

      <section className="mb-[200px] px-6 pt-[30px] text-center xs:px-8 xs:pt-10 sm:px-16 md:mx-auto md:max-w-[640px] lg:mt-24 lg:rounded-3xl lg:p-14 lg:shadow-md xl:mt-[106px] 3xl:mb-[240px] 3xl:max-w-[649px] 3xl:rounded-[30px] 3xl:p-[75px]">
        <h2>Create your account</h2>
        <p className="mt-[10px] text-gray-600 3xl:mt-[7px]">It’s Includes a free 2 week trial!</p>

        <SocialSignup />

        <Seprator text="OR" className="mt-[21px]" />

        <SignupForm />
      </section>

      <Footer />
    </>
  );
};

export default Signup;
