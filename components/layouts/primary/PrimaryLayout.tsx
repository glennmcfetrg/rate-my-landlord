import Head from 'next/head';
import Footer from '../../navigation/footer/Footer';
import Header from '../../navigation/header/Header';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
    justify?: 'items-center' | 'items-start';
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
                                                     children,
                                                     justify = 'items-center',
                                                     ...divProps
                                                 }) => {
    return (
        <>
            <Head>
                <title>RateMyLandlord</title>
            </Head>
            <div
                {...divProps}
                className={`min-h-screen flex flex-col ${justify} bg-gray-900 text-slate-300`}
            >
                <Header/>
                <main className="px-5">{children}</main>
                <div className="m-auto"/>
                <Footer/>
            </div>
        </>
    );
};

export default PrimaryLayout;
