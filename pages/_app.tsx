import "@/styles/globals.css";
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <PlasmicRootProvider Head={Head} Link={Link}>
        <Component {...pageProps} />
      </PlasmicRootProvider>
    </SessionProvider>
  );
}
