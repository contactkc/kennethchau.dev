import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { Analytics } from '@vercel/analytics/next';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class">
            <Head>
                <title>kenneth chau</title>
            </Head>
            <div>
                <Component {...pageProps} />
                <Analytics />
            </div>
        </ThemeProvider>
    );
}

export default MyApp;