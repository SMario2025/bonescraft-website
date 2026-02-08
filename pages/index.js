import Head from "next/head";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Head>
                <title>Bonescraft – Minecraft meets Web3</title>
                <meta
                    name="description"
                    content="Bonescraft is a community-driven Minecraft server combining classic survival gameplay with Web3 mechanics."
                />
            </Head>

            {/* NAVBAR */}
            <nav className="nav">
                <div className="navInner">
                    <Link href="/" className="navBtn light">Home</Link>
                    <Link href="/crypto" className="navBtn light">Web3 / Token</Link>

                    <a
                        href="https://discord.gg/nq4MFmakJ"
                        target="_blank"
                        rel="noreferrer"
                        className="navBtn discord"
                    >
                        Discord
                    </a>
                </div>
            </nav>

            {/* HERO IMAGE */}
            <section className="hero"></section>

            {/* LOWER SECTION */}
            <section className="lower">
                <h1 className="title">Bonescraft</h1>
                <h2 className="subtitle">Minecraft meets Web3</h2>

                <div className="buttons">
                    <a className="btn green" href="#server">Join the Server</a>
                    <a className="btn yellow" href="#roadmap">View Roadmap</a>

                    <a className="btn cyan" href="/crypto">
                        Web3 / Token
                    </a>
                </div>

                <div className="serverBox" id="server">
                    <h3>Server Information</h3>

                    <div className="row">
                        <span>Java Edition</span>
                        <span>116.202.51.118:20006</span>
                    </div>

                    <div className="row">
                        <span>Bedrock Edition</span>
                        <span>116.202.51.118</span>
                    </div>

                    <div className="row">
                        <span>Bedrock Port</span>
                        <span>20006</span>
                    </div>
                </div>
            </section>

            {/* ROADMAP */}
            <section className="roadmap" id="roadmap">
                <h2>Roadmap</h2>

                <div className="roadmapGrid">
                    <div className="card">
                        <h3>Phase 1 – Foundation</h3>
                        <ul>
                            <li>Server setup</li>
                            <li>World migration</li>
                            <li>Testing phase</li>
                            <li>Reward system</li>
                        </ul>
                    </div>

                    <div className="card">
                        <h3>Phase 2 – Launch</h3>
                        <ul>
                            <li>Official opening</li>
                            <li>Ranks & permissions</li>
                            <li>Land protection</li>
                            <li>Community events</li>
                        </ul>
                    </div>

                    <div className="card">
                        <h3>Phase 3 – Expansion</h3>
                        <ul>
                            <li>PvP modes</li>
                            <li>OneBlock & new modes</li>
                            <li>Economy expansion</li>
                            <li>Long-term updates</li>
                        </ul>
                    </div>
                </div>
            </section>

            <footer>© 2026 Bonescraft — Minecraft meets Web3</footer>

            {/* STYLES */}
            <style jsx>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #000;
        }

        /* NAV */
        .nav {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(15, 15, 15, 0.95);
          z-index: 1000;
        }

        .navInner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 14px 20px;
          display: flex;
          gap: 14px;
          align-items: center;
        }

        .navBtn {
          padding: 10px 18px;
          border-radius: 10px;
          font-weight: 700;
          text-decoration: none;
          transition: 0.2s;
          font-size: 15px;
        }

        .navBtn.light {
          background: #fff;
          color: #000;
        }

        .navBtn.light:hover {
          background: #eaeaea;
        }

        .navBtn.discord {
          background: #5865f2;
          color: #fff;
        }

        .navBtn.discord:hover {
          background: #4752c4;
        }

        /* HERO */
        .hero {
          height: 75vh;
          background-image: url("/hero.jpg");
          background-size: cover;
          background-position: center;
          margin-top: 64px;
        }

        /* LOWER */
        .lower {
          background-image: url("/lower-bg.jpg");
          background-size: cover;
          background-position: center;
          padding: 90px 20px;
          text-align: center;
        }

        .title {
          font-size: 4rem;
          color: #000;
        }

        .subtitle {
          font-size: 1.6rem;
          color: #111;
          margin-bottom: 40px;
        }

        .buttons {
          display: flex;
          gap: 15px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .btn {
          padding: 12px 22px;
          border-radius: 8px;
          font-weight: bold;
          text-decoration: none;
          color: #000;
        }

        .green { background: #4caf50; }
        .yellow { background: #fbc02d; }
        .cyan { background: #26a5e4; color: white; }

        .serverBox {
          max-width: 520px;
          margin: 0 auto;
          background: rgba(0,0,0,0.65);
          color: white;
          padding: 25px;
          border-radius: 14px;
        }

        .row {
          display: flex;
          justify-content: space-between;
          padding: 6px 0;
          border-bottom: 1px solid rgba(255,255,255,0.2);
        }

        /* ROADMAP */
        .roadmap {
          background: #0f0f0f;
          color: white;
          padding: 80px 20px;
          text-align: center;
        }

        .roadmapGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 40px;
          max-width: 1000px;
          margin: auto;
        }

        .card {
          background: #151515;
          padding: 25px;
          border-radius: 14px;
        }

        footer {
          background: #080808;
          text-align: center;
          padding: 25px;
          color: #777;
          font-size: 14px;
        }
      `}</style>
        </>
    );
}
