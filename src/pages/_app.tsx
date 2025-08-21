import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from "next/head";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class">
            <Head>
                <title>kenneth chau</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
                    rel="stylesheet">
                </link>
            </Head>
            <div>
                <Component {...pageProps} />
            </div>
        </ThemeProvider>
    );
}

export default MyApp;