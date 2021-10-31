import Link from 'next/link';
import Svg from '../ui/Svg';

const routes: ReadonlyArray<string> = [
  'Twitter',
  'Home',
  'Explore',
  'Notifications',
  'Messages',
  'Bookmarks',
  'Lists',
  'Profile',
  'More',
];

const NavRoutes = () => (
  <div className="grid gap-2">
    {routes.map((route) => (
      <Link key={route} href="/" passHref={true}>
        <div
          className="
            grid grid-flow-col items-center gap-4
            cursor-pointer w-max rounded-full p-3
            hover:bg-basic-200"
        >
          <Svg name={route.toLowerCase()} alt={`Navigate to ${route}`} />
          <span className="font-semibold text-xl">{route}</span>
        </div>
      </Link>
    ))}
  </div>
);

export default NavRoutes;
