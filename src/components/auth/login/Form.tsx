import { useRouter } from 'next/router';

import Button from 'components/ui/form/Button';
import Input from 'components/ui/form/Input';

const LoginForm = () => {
  const router = useRouter();

  const loginHandler = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    // TODO use Formik to handle form data
    <form className="mt-[25px] space-y-4 3xl:space-y-[25px]" onSubmit={loginHandler}>
      <Input placeholder="Email" type="email" required />
      <Input type="password" placeholder="Password" required />
      <Button label="Login" className="sm:py-2 lg:py-3 3xl:py-[15px] 3xl:text-btn-lg" type="submit" />
    </form>
  );
};

export default LoginForm;
