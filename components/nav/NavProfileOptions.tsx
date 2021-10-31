import Link from 'next/link';
import NavProfile from './NavProfile';

const NavProfileOptions = () => {
  return (
    <div>
      <NavProfile showCheck={true} />
      <hr className="border-gray-600" />
      <div className="py-4 px-5 cursor-pointer hover:bg-basic-200">
        <span>Add an existing account</span>
      </div>
      <div className="py-4 px-5 hover:bg-basic-200 rounded-b ">
        <Link href="/logout">
          <a className="block">Logout @penrodlol</a>
        </Link>
      </div>
    </div>
  );
};

export default NavProfileOptions;
