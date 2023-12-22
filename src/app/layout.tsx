import * as colors from '@radix-ui/colors';
import { Metadata, Viewport } from 'next';
import { Albert_Sans, JetBrains_Mono } from 'next/font/google';
import { PropsWithChildren } from 'react';
import resumeConfig from '../../edit-me/config/resumeConfig';

// ICONS CONFIG
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

// STYLES
import { personal } from '@content';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { headers } from 'next/headers';
import { protocol, vercelURL } from 'src/helpers/env';
import { fullName } from 'src/helpers/utils';
import { twMerge } from 'tailwind-merge';
import { ThemeSetting } from '../../edit-me/types/Config';
import './globals.css';

const accentColor = resumeConfig.accentColor;

const albert = Albert_Sans({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-albert',
});

const jetBrainsMono = JetBrains_Mono({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const generateMetadata = async (): Promise<Metadata> => {
  const host = headers().get('host');
  const baseURL = `${protocol}://${host || vercelURL}`;
  const siteName = `${fullName} Professional Résumé for Astrophysicist and Astronomer`;
  const title = `${fullName} | Astrophysicist and Astronomer | Résumé `;
  const description = `${fullName} Professional Résumé for Astrophysicist and Astronomer on the Vercel Cloud Platform.`;

  return {
    metadataBase: new URL(baseURL),
    applicationName: siteName,
    authors: { name: fullName },
    creator: fullName,
    description,
    generator: 'Next.js',
    keywords: ['resume', fullName, 'next.js', 'pdf'],
    openGraph: {
      type: 'profile',
      firstName: personal.givenName,
      lastName: personal.familyName,
      title,
      description,
      siteName,
      url: baseURL,
    },
    title,
    twitter: {
      site: siteName,
      creator: fullName,
      description,
      title,
    },
  };
};

export const viewport: Viewport = {
  initialScale: 1,
  // @ts-ignore
  themeColor: colors[accentColor][`${accentColor}9`],
  width: 'device-width',
};

const RootLayout: React.FC<PropsWithChildren> = async ({ children }) => {
  return (
    <html
      lang="en"
      className={twMerge(
        albert.variable,
        jetBrainsMono.variable,
        resumeConfig.appTheme === ThemeSetting.Dark && 'dark',
      )}
    ><meta name="google-site-verification" content="WNelk2tzy48aonUlho-bbUTHl1YNyoxTSd-MPevILNA" /><meta name="msvalidate.01" content="9FBB288F1180F3C2A55231499D2CE4E0" />
      <body className="bg-neutral-1 text-neutral-12 selection:bg-accent-11 selection:text-neutral-1">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
