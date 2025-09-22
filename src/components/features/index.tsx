import type { ReactNode } from "react";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import { cn } from "@site/src/lib/utils";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Real-World Exploration",
    Svg: require("@site/static/img/adventure.svg").default,
    description: (
      <>
        Step beyond your screen and into an augmented reality. Your physical
        movements transform familiar streets into a sprawling cyberpunk
        playground, where every step can lead to new quests, hidden discoveries,
        and thrilling encounters.
      </>
    ),
  },
  {
    title: "True Digital Ownership",
    Svg: require("@site/static/img/hero.svg").default,
    description: (
      <>
        Own every aspect of your adventure. Your unique characters and rare
        items are secured as onchain, giving you verifiable ownership,
        tradability, and a persistent digital legacy that evolves with your
        journey.
      </>
    ),
  },
  {
    title: "Intelligent Worlds",
    Svg: require("@site/static/img/robot.svg").default,
    description: (
      <>
        Experience a living, breathing city powered by advanced AI. From
        adaptive enemy behaviors to dynamic quest generation and responsive NPC
        interactions, our AI integration creates an unpredictable and deeply
        immersive world that reacts to your choices.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={cn("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3" className={cn("tomorrow-bold", styles.uppercase)}>
          {title}
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
