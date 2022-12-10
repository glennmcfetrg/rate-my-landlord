import Link from 'next/link';

export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}

const Footer: React.FC<IFooter> = ({ className, ...footerProps }) => {
  return (
    <footer
      {...footerProps}
      className={`w-full p-5 bg-zinc-800 text-slate-300 ${className}`}
    >
      <div className="space-x-5 m-5">
        <Link href="/" className="hover:underline">
          Contact Us
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
