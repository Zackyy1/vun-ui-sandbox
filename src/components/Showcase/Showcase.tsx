import {
  VBodyText,
  VButton,
  VCard,
  VCode,
  VContainer,
  VHeading,
  VPill,
  VSlider,
} from "@zackyy1/vun-ui";
import React, { useEffect, useRef } from "react";
import Header from "../Header/Header";
import "./Showcase.scss";

const Showcase = () => {
  const refTest = useRef();
  useEffect(() => {
    console.log(refTest);
  }, []);

  return (
    <div className="showcase">
      <Header />
      <VContainer>
        <section>
          <VHeading tag="h2">What's Vun UI about?</VHeading>
          <VBodyText>
            Vun UI is a React component library in neumorphic style that I'm
            building to have a library of components that I can use in my future
            projects and to quickly compose applications in similar styles.
          </VBodyText>
          <VBodyText>
            The library is built using TypeScript and Scss. The components are
            built using React. The components are published to NPM and can be
            installed using
            <VCode inline>npm install @zackyy1/vun-ui</VCode>
            if you want to use them in your own projects.
          </VBodyText>
          <VBodyText>
            The library is constantly in development and I'm adding new
            components as I create more functionality for my applications.
          </VBodyText>
        </section>
        <section>
          <VHeading tag="h2">Getting started</VHeading>
          <VBodyText>
            Vun UI is only available as a React library. As specified above, use
            the following command inside your project root to start working with
            Vun UI.
          </VBodyText>
          <VCode>npm install @zackyy1/vun-ui</VCode>
          <VBodyText>
            If CSS is not applied, you should manually import it in{" "}
            <VCode inline>App.js</VCode> using{" "}
            <VCode inline>import '@zackyy1/vun-ui/dist/cjs/output.css'</VCode>
          </VBodyText>
          <VBodyText>
            You can now use Vun components in your project by importing them:
          </VBodyText>
          <VCode>{`import {VBodyText, VButton, VCard, VCode, VContainer, VHeading, VSlider} from "@zackyy1/vun-ui"`}</VCode>
        </section>
        <VHeading tag="h2">Components</VHeading>
        <section id="cards">
          <VHeading tag="h3">Cards</VHeading>

          <div className="row-3">
            <VCard>
              <VHeading tag="h4">Simple!</VHeading>
              <VBodyText>
                This is a card component. It's a simple container that can be
                used to group content together.
              </VBodyText>
            </VCard>
            <VCard>
              <VHeading tag="h4">Also,</VHeading>
              <VBodyText>
                Neumorphic components are not meant to be changed! They will
                always look nicely side-by-side.
              </VBodyText>
            </VCard>
            <VCard>
              <VHeading tag="h4">Swift usage</VHeading>
              <VBodyText>
                The main purpose is, of course, to use this library to build
                applications as fast as possible in similar style.
              </VBodyText>
            </VCard>
          </div>
          <VHeading tag="h4">Example</VHeading>
          <VCode>
            {`<VCard>
    <VHeading tag="h4">Example heading</VHeading>
    <VBodyText>
        Body text for the card
    </VBodyText>
</VCard>`}
          </VCode>
        </section>
        <section id="button">
          <VHeading tag="h3">Button</VHeading>
          <VButton>Submit form</VButton>
          <VHeading tag="h4">Example</VHeading>
          <VCode>{`<Button>Submit form</Button>`}</VCode>
        </section>
        <section id="slider">
          <VHeading tag="h3">Slider</VHeading>
          <VSlider min={1} max={10} step={1} defaultValue={4} />
          <VHeading tag="h4">Example</VHeading>
          <VCode>{`<VSlider min={1} max={10} step={1} defaultValue={4} />`}</VCode>
        </section>
        <section id="code">
          <VHeading tag="h3">Code</VHeading>
          <VBodyText>
            Code can be displayed inline or as a block. In order to pre-format
            the code, contents must be provided as a string. If content is not
            provided as string, then formatting must be done manually, e.g.
            every new line must start with {"<br />"}
          </VBodyText>
          <VCode>
            You've seen this one before! <br />
            Either write code like this, line by line,
          </VCode>
          <VBodyText>
            Or use <VCode inline>inline</VCode> prop to fit it inside your text.
          </VBodyText>
          <VHeading tag="h4">Example</VHeading>
          <VCode>
            {`<VCode>
  You've seen this one before! <br />
  You can write code using br tag for the new line
</VCode>

<VCode>
  {\`code goes here
  and on the new lines without additional formatting\`}
</VCode>

<VBodyText>
  Some inline code <VCode inline>goes here</VCode>
</VBodyText>
`}
          </VCode>
        </section>
        <section id="pills">
          <VHeading tag="h3">Pills</VHeading>
          <VBodyText>Use pills to present small words as a list inline, in a more accurate way.</VBodyText>

          <VPill text={'This is a pill'} />
          <VPill text={'They are always inline'} />
          <VPill text={'And showcase small lists more presentably'} />
          
          <VHeading tag="h4">Example</VHeading>
          <VCode>
            {`<VPill text="Pill text" />`}
          </VCode>
        </section>
      </VContainer>
    </div>
  );
};

export default Showcase;
