import { useState } from "react";

import FaqList from "../../components/FaqList";
import { FAQ } from "../content";
import { Container, Reveal, Section, SectionHeading } from "../primitives";

const FAQ_ITEMS = FAQ.items.map((item, index) => ({
  ...item,
  key: String(index),
}));

const Faq = () => {
  const [activeKeys, setActiveKeys] = useState([FAQ_ITEMS[0].key]);

  return (
    <Section id="faq">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={FAQ.eyebrow} title={FAQ.title} />
        </Reveal>
        <Reveal delay={0.1} className="mt-12">
          <FaqList
            items={FAQ_ITEMS}
            activeKeys={activeKeys}
            onActiveKeysChange={setActiveKeys}
            forceRender
          />
        </Reveal>
      </Container>
    </Section>
  );
};

export default Faq;
