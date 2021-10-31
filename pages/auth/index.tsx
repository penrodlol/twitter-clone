import type { NextPage } from 'next';
import AuthCard from '../../components/auth/AuthCard';
import { AuthIllustration } from '../../components/auth/AuthIllustration';

const Login: NextPage = () => {
  return (
    <div
      className="grid grid-flow-col h-screen bg-basic-400 gap-10"
      style={{ gridTemplateColumns: '55vw 1fr' }}
    >
      <AuthIllustration />
      <div className="relative h-full">
        <div className="absolute top-1/4">
          <AuthCard />
        </div>
      </div>
    </div>
  );
};

export default Login;
