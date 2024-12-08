import { NavButton } from './NavButton';

export const Navigation = () => {
  return (
    <div className="relative h-[52px] max-w-[200px] lg:max-w-none">
      <div className="relative z-10 my-auto flex h-full pl-2 pr-1.5 lg:pl-1.5 xl:pl-5">
          <div className="mr-2 hidden lg:flex lg:items-center">
            <div>
              <NavButton href={`/`}>
                Home
              </NavButton>
            </div>
            <div className="ml-2">
              <NavButton href={`/categories`}>Categories</NavButton>
            </div>
            <div className="ml-2">
              <NavButton href={`/contribute`}>Contribute</NavButton>
            </div>
            <div className="ml-2">
              <NavButton href={`/about`}>About</NavButton>
            </div>
          </div>
      </div>
    </div>
  );
};
