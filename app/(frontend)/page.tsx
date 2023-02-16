import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Finn Evermann | Portfolio',
    template: '%s | Portfolio',
  },
};

export default function Page() {
  return <div className="w-full md:text-gray-500">Hello world</div>;
}
