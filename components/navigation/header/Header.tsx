import Link from 'next/link';
import AuthButton from '../../buttons/auth-button/AuthButton';
import PostButton from '../../buttons/post-button/PostButton';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  return (
    <header
      {...headerProps}
      className={`w-full flex flex-row items-center justify-between ${className} bg-gray-900 text-slate-300 border-b-2 border-zinc-700`}
    >
      <div className="space-x-5 m-3">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <PostButton />
      </div>
      <div className="space-x-5 m-3">
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <AuthButton />
      </div>
    </header>
  );
};

export default Header;
