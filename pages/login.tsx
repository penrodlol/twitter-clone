import type { NextPage } from 'next';
import LoginCard from '../components/login/LoginCard';
import { LoginIllustration } from '../components/login/LoginIllustration';

const Login: NextPage = () => {
  return (
    <div
      className="grid grid-flow-col h-screen bg-basic-400 gap-10"
      style={{ gridTemplateColumns: '55vw 1fr' }}
    >
      <LoginIllustration />
      <div className="relative h-full">
        <div className="absolute top-1/4">
          <LoginCard />
        </div>
      </div>
    </div>
  );
};

export default Login;
