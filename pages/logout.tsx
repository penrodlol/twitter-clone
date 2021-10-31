import type { NextPage } from 'next';
import LogoutCard from '../components/logout/LogoutCard';

const Logout: NextPage = () => {
  return (
    <div className="flex h-screen bg-basic-100">
      <LogoutCard />
    </div>
  );
};

export default Logout;
