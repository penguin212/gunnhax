import { Cute_Font } from 'next/font/google';
import Sidebar from './components/Sidebar';

const cute = Cute_Font({ subsets: ['latin'], weight: "400"});

export default function Home() {
  return (
    <>
      <main className="h-screen relative">
          <h1 className={cute.className}>
            <Sidebar/>
            <div className='flex flex-row px-14'>
              <p className='text-logo1 py-10 text-6xl font-bold '>
                Chem
              </p>
              <p className='text-logo2 py-10 text-6xl font-bold '>
                Suika
              </p>
            </div>
          </h1>
      </main>
    </>
  );
}
