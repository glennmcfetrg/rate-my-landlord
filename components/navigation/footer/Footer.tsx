import { useRouter } from 'next/router';
import React from 'react';

export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}

const Footer: React.FC<IFooter> = ({ className, ...footerProps }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/contact', '/contact', { shallow: true });
  };

  return (
    <footer
      {...footerProps}
      className={`w-full bg-zinc-800 text-slate-300 ${className}`}
    >
      <div className="space-x-5 m-5">
        <button onClick={handleClick} className="hover:underline">
          Contact Us
        </button>
      </div>
    </footer>
  );
};

export default Footer;
