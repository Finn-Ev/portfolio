'use client';

import { Metadata } from 'next';
import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.config';

export const metadata: Metadata = {};

export default function StudioPage() {
  return <NextStudio config={config} />;
}
