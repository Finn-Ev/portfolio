import type { Metadata } from 'next';
import HomeSection from './sections/HomeSection';

export const metadata: Metadata = {
  title: {
    default: 'Finn Evermann | Portfolio',
    template: '%s | Portfolio',
  },
};

export default function Page() {
  return (
    <>
      <HomeSection />
    </>
  );
}
