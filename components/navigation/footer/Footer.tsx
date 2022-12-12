import Link from 'next/link';
import React from 'react';

export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}

const Footer: React.FC<IFooter> = ({ className, ...footerProps }) => {
  return (
    <footer
      {...footerProps}
      className={`w-full flex flex-row items-center justify-between ${className} bg-zinc-800 text-slate-300 border-t-2 border-red-500`}
    >
      <div className="space-x-5 m-5">
        <Link href="/contact" className="hover:underline">
          Contact Us
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
