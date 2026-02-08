import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* BASIC */}
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                {/* GLOBAL SEO */}
                <meta
                    name="description"
                    content="Bonescraft is a global Minecraft server where classic survival gameplay meets Web3, community rewards and long-term worlds."
                />
                <meta
                    name="keywords"
                    content="
            minecraft server,
            bonescraft,
            minecraft survival,
            minecraft smp,
            web3 gaming,
            crypto gaming,
            blockchain gaming,
            play to earn minecraft,
            minecraft web3
          "
                />
                <meta name="author" content="Bonescraft" />
                <link rel="canonical" href="https://bonescraft.de" />

                {/* OPEN GRAPH (Discord / Telegram / Facebook) */}
                <meta property="og:title" content="Bonescraft – Minecraft meets Web3" />
                <meta
                    property="og:description"
                    content="A community-driven Minecraft server combining survival gameplay with Web3 and crypto-powered rewards."
                />
                <meta property="og:url" content="https://bonescraft.de" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://bonescraft.de/hero.jpg" />

                {/* TWITTER / X */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Bonescraft – Minecraft meets Web3" />
                <meta
                    name="twitter:description"
                    content="Survival Minecraft with Web3 integration, community rewards and long-term worlds."
                />
                <meta
                    name="twitter:image"
                    content="https://bonescraft.de/hero.jpg"
                />

                {/* PERFORMANCE */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />

                {/* FAVICON (falls vorhanden) */}
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
