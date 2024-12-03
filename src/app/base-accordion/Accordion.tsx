import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Accordion = ({ children }: Props) => {
  return (
    <div className="after:block after:w-full after:border-b-p3">
      {children}
    </div>
  );
};
