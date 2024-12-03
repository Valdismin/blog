import { Navigation } from './Navigation';

export const Header = () => {

  return (
    <header className="flex w-full items-center justify-center text-s2 border-b border-n4 sticky top-0 bg-n1 opacity-100 left-0 z-50">
      <Navigation />
    </header>
  );
};
