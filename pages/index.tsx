import type { NextPage } from 'next';
import { Nav } from '../components/nav/Nav';

const Home: NextPage = () => {
  return (
    <div className="grid grid-flow-col w-max m-auto min-h-screen">
      <section className="w-[275px] h-full">
        <Nav />
      </section>
      <section className="max-w-[600px]"></section>
      <section className="w-[350px]"></section>
    </div>
  );
};

export default Home;
