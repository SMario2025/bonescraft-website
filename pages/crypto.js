import Head from "next/head";
import Link from "next/link";

export default function Crypto() {
  return (
    <>
      <Head>
        <title>Bonescraft – Web3 & Crypto Gaming Ecosystem</title>
        <meta
          name="description"
          content="Bonescraft is a Web3-enabled Minecraft gaming ecosystem. Community-first crypto gaming, transparent token utility, and long-term sustainable blockchain integration."
        />
        <meta
          name="keywords"
          content="web3 gaming, crypto gaming, blockchain gaming, minecraft web3, play to earn, gaming token, web3 community"
        />
      </Head>

      <main
        style={{
          minHeight: "100vh",
          backgroundImage:
            "linear-gradient(180deg, rgba(5,10,20,0.75), rgba(5,10,20,0.95)), url('/crypto-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          color: "#eaf0f6",
          padding: "6rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "1150px", margin: "0 auto" }}>

          {/* HERO */}
          <section style={{ marginBottom: "5rem" }}>
            <span style={badge}>WEB3 GAMING ECOSYSTEM</span>

            <h1 style={heroTitle}>
              Web3 & Crypto Gaming<br />Built for the Long Term
            </h1>

            <p style={heroText}>
              Bonescraft merges traditional Minecraft gameplay with modern Web3
              infrastructure — designed for players, creators, and communities
              who believe in transparency, fairness, and sustainable blockchain gaming.
            </p>
          </section>

          {/* WEB3 */}
          <GlassSection>
            <h2>What is Web3 Gaming?</h2>
            <p>
              Web3 gaming introduces decentralized ownership, blockchain-based rewards,
              and community-driven economies into games.
            </p>
            <p>
              On Bonescraft, Web3 is infrastructure — not speculation.
            </p>
          </GlassSection>

          {/* VISION */}
          <GlassSection>
            <h2>The Bonescraft Vision</h2>
            <ul style={list}>
              <li>🎮 Gameplay-first Minecraft experience</li>
              <li>🌍 Global & inclusive community</li>
              <li>💎 Fair and transparent crypto integration</li>
              <li>🛡️ Built for long-term sustainability</li>
            </ul>
          </GlassSection>

          {/* TOKEN ROADMAP & ECONOMICS */}
          <GlassSection>
            <h2>Token Roadmap & Economics</h2>

            <p>
              The Bonescraft token is designed as a utility-first gaming asset —
              focused on sustainability, transparency, and fair distribution
              within the Bonescraft ecosystem.
            </p>

            <h3 style={{ marginTop: "1.8rem" }}>Total Supply</h3>
            <p><strong>1,000,000,000 BONES Tokens</strong></p>

            <h3 style={{ marginTop: "1.8rem" }}>Token Allocation</h3>
            <ul style={list}>
              <li>💧 <strong>250,000,000</strong> — Initial Liquidity (Raydium Pool)</li>
              <li>🔒 <strong>450,000,000</strong> — Locked Liquidity (long-term stability)</li>
              <li>🏆 <strong>200,000,000</strong> — Community Rewards (monthly distribution)</li>
              <li>🛠️ <strong>100,000,000</strong> — Development & Ecosystem Growth (vesting)</li>
            </ul>

            <h3 style={{ marginTop: "1.8rem" }}>Liquidity & Locks</h3>
            <ul style={list}>
              <li>🔒 Locked liquidity to prevent sudden dumps</li>
              <li>⏳ Development tokens released via controlled vesting</li>
              <li>📉 Community rewards distributed gradually</li>
              <li>🧾 Full on-chain transparency</li>
            </ul>

            <h3 style={{ marginTop: "1.8rem" }}>Launch Status</h3>
            <p>
              The Bonescraft token is currently in development.
              The official launch will be announced once the server,
              liquidity setup, and reward systems are fully ready.
            </p>

            <p style={{ opacity: 0.75 }}>
              No presale. No private allocations. Community-first.
            </p>
          </GlassSection>

          {/* TRUST */}
          <GlassSection>
            <h2>Transparency & Trust</h2>
            <p>
              Bonescraft is built with transparency at its core.
              Token allocation, rewards, and development funding
              are designed to be verifiable and aligned with the community.
            </p>
            <p>The community is the asset — not the token.</p>
          </GlassSection>

          {/* CTA */}
          <section style={{ textAlign: "center", marginTop: "5rem" }}>
            <h2>Join the Bonescraft Ecosystem</h2>

            <p style={{ maxWidth: "700px", margin: "0 auto 2rem", opacity: 0.9 }}>
              Minecraft. Community. Web3. Built for the long run.
            </p>

            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/">
                <button style={button}>Main Website</button>
              </Link>

              <a href="https://discord.gg/nq4MFmakJ" target="_blank" rel="noreferrer">
                <button style={button}>Join Discord</button>
              </a>

              <a href="https://t.me/Bonescraft" target="_blank" rel="noreferrer">
                <button style={button}>Telegram</button>
              </a>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}

/* ===== COMPONENTS ===== */

function GlassSection({ children }) {
  return (
    <section
      style={{
        marginBottom: "3.5rem",
        padding: "2.5rem",
        borderRadius: "18px",
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(14px)",
        boxShadow: "0 0 35px rgba(0,180,255,0.12)",
      }}
    >
      {children}
    </section>
  );
}

/* ===== STYLES ===== */

const heroTitle = {
  fontSize: "3.6rem",
  margin: "1rem 0",
  textShadow: "0 0 35px rgba(0,180,255,0.45)",
};

const heroText = {
  fontSize: "1.35rem",
  maxWidth: "850px",
  opacity: 0.95,
};

const badge = {
  display: "inline-block",
  padding: "0.4rem 0.9rem",
  borderRadius: "999px",
  background: "rgba(0,180,255,0.15)",
  color: "#7ddcff",
  fontSize: "0.85rem",
  letterSpacing: "0.08em",
};

const list = {
  listStyle: "none",
  padding: 0,
  lineHeight: "1.9",
};

const button = {
  padding: "1rem 2.1rem",
  borderRadius: "14px",
  border: "1px solid rgba(0,180,255,0.4)",
  background: "linear-gradient(135deg, #0a1f33, #0e2f44)",
  color: "#fff",
  cursor: "pointer",
  fontSize: "1rem",
  boxShadow: "0 0 30px rgba(0,180,255,0.35)",
};

