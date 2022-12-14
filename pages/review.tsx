import PropertyForm from '../components/forms/property-form/PropertyForm';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Review: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36 ">
      <PropertyForm />
    </div>
  );
};

export default Review;

Review.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
