import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/features";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import { cn } from "../lib/utils";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={cn("hero hero--primary", styles.heroBanner)}
      style={{
        backgroundImage: "url(/img/background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <Heading
          as="h1"
          className={cn("hero__title tomorrow-extrabold", styles.heroTitle)}
        >
          RPG3: <span className="marker">Voidrunner</span>
        </Heading>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Home`}
      description="Explore a cyberpunk world, hunt wild, nightmarish beasts, and forge your legend in RPG3: Voidrunner, a groundbreaking web3 RPG blending unique onchain mechanics with real-world exploration."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
