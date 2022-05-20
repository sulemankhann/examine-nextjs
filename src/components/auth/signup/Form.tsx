import { useRouter } from 'next/router';

import Button from 'components/ui/form/Button';
import Input from 'components/ui/form/Input';

const SignupForm = () => {
  const router = useRouter();

  const signupHandler = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    // TODO use Formik to handle form data
    <form className="mt-[25px] space-y-4 3xl:space-y-[25px]" onSubmit={signupHandler}>
      <Input placeholder="Full Name" required />
      <Input placeholder="Email" type="email" required />
      <Input type="password" placeholder="Password" required />
      <Button
        label="Start your 2-week free trial!"
        className="sm:py-2 lg:py-3 3xl:py-[15px] 3xl:text-btn-lg"
        type="submit"
      />
    </form>
  );
};

export default SignupForm;
