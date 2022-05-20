import type { NextPage } from 'next';
import Logo from 'public/icons/logo.svg';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-dark">
      <Logo />
      <h1 className="text-light">Examine</h1>
      <h2 className="text-light">Examine</h2>
      <h3 className="text-light">Examine</h3>
      <h4 className="text-light">Examine</h4>
      <h5 className="text-light">Examine</h5>
    </div>
  );
};

export default Home;
