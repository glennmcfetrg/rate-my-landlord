import Image from 'next/image';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const About: NextPageWithLayout = () => {
  return (
    <section className="bg-zinc-800 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-8">About Us</h1>
        <Image
          src="/tiger-geb26437ea_640.jpg"
          alt="card__image"
          className="rounded-full"
          width="200"
          height="100"
        />
        <p className="text-slate-300 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
          dapibus nisi. Vestibulum ut posuere nisi.
        </p>
        <p className="text-slate-300 mb-8">
          Aliquam in dapibus erat. Integer imperdiet tortor vitae lorem
          condimentum, sit amet imperdiet tellus ornare.
        </p>
        <p className="text-slate-300mb-8">
          Vivamus euismod ligula eget massa egestas, non aliquet dolor
          sollicitudin. Ut at vestibulum magna.
        </p>
        <p className="text-slate-300 mb-8">
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas.
        </p>
      </div>
    </section>
  );
};

export default About;

About.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
