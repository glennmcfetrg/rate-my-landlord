import Link from 'next/link';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  return (
    <header
      {...headerProps}
      className={`w-full flex flex-row justify-end ${className} bg-zinc-800 text-slate-300`}
    >
      <div className="space-x-5 m-2">
        <Link href="/" className="hover:underline hidden sm:inline">
          About
        </Link>
        <Link href="/" className="hover:underline hidden sm:inline">
          Post
        </Link>
        <Link href="/" className="hover:underline hidden sm:inline">
          Images
        </Link>
        <button className="btn-primary text-black">Sign In</button>
      </div>
    </header>
  );
};

export default Header;
