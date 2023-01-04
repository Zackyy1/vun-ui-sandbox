// import { Button } from '@zackyy1/vun-ui'
import React from "react";
import Header from "../Header/Header";
import BodyText from "../libraryComponents/BodyText/BodyText";
import Button from "../libraryComponents/Button";
import Card from "../libraryComponents/Card/Card";
import Code from "../libraryComponents/Code/Code";
import Container from "../libraryComponents/Container";
import Heading from "../libraryComponents/Heading/Heading";
import Slider from "../libraryComponents/Inputs/Slider";
import "./Showcase.scss";

const Showcase = () => {
  return (
    <div className="showcase">
      <Header />
      <Container>
        <section>
          <Heading tag="h2">What's Vun UI about?</Heading>
          <BodyText>
            Vun UI is a React component library in neumorphic style that I'm
            building to have a library of components that I can use in my future
            projects and to quickly compose applications in similar styles.
          </BodyText>
          <BodyText>
            The library is built using TypeScript and Scss. The components are
            built using React. The components are published to NPM and can be
            installed using
            <Code inline>npm install @zackyy1/vun-ui</Code>
            if you want to use them in your own projects.
          </BodyText>
          <BodyText>
            The library is constantly in development and I'm adding new
            components as I create more functionality for my applications.
          </BodyText>
        </section>
        <section>
          <Heading tag="h2">Getting started</Heading>
          <BodyText>
            Vun UI is only available as a React library. As specified above, use
            the following command inside your project root to start working with
            Vun UI.
          </BodyText>
          <Code>npm install @zackyy1/vun-ui</Code>
          <BodyText>
            If CSS is not applied, you should manually import it in{" "}
            <Code inline>App.js</Code> using{" "}
            <Code inline>import '@zackyy1/vun-ui/dist/cjs/output.css'</Code>
          </BodyText>
        </section>
        <Heading tag="h2">Components</Heading>
        <section id="cards">
          <Heading tag="h3">Cards</Heading>

          <div className="row-3">
            <Card>
              <Heading tag="h4">Simple!</Heading>
              <BodyText>
                This is a card component. It's a simple container that can be
                used to group content together.
              </BodyText>
            </Card>
            <Card>
              <Heading tag="h4">Also,</Heading>
              <BodyText>
                Neumorphic components are not meant to be changed! They will
                always look nicely side-by-side.
              </BodyText>
            </Card>
            <Card>
              <Heading tag="h4">Swift usage</Heading>
              <BodyText>
                The main purpose is, of course, to use this library to build
                applications as fast as possible in similar style.
              </BodyText>
            </Card>
          </div>
          <Heading tag="h4">Example</Heading>
          <Code>
            {`<Card>
    <Heading tag="h4">Example heading</Heading>
    <BodyText>
        Body text for the card
    </BodyText>
</Card>`}
          </Code>
        </section>
        <section id="button">
          <Heading tag="h3">Button</Heading>
          <Button>Submit form</Button>
          <Heading tag="h4">Example</Heading>
          <Code>{`<Button>Submit form</Button>`}</Code>
        </section>
        <section id="slider">
          <Heading tag="h3">Slider</Heading>
          <Slider min={1} max={10} step={1} defaultValue={4} />
          <Heading tag="h4">Example</Heading>
          <Code>{`<Slider min={1} max={10} step={1} defaultValue={4} />`}</Code>
        </section>
        <section id="code">
          <Heading tag="h3">Code</Heading>
          <BodyText>
            Code can be displayed inline or as a block. In order to pre-format
            the code, contents must be provided as a string. If content is not
            provided as string, then formatting must be done manually, e.g.
            every new line must start with {"<br />"}
          </BodyText>
          <Code>
            You've seen this one before! <br />
            Either write code like this, line by line,
          </Code>
          <BodyText>
            Or use <Code inline>inline</Code> prop to fit it inside your text.
          </BodyText>
          <Heading tag="h4">Example</Heading>
          <Code>
            {`<Code>
  You've seen this one before! <br />
  You can write code using br tag for the new line
</Code>

<Code>
  \{\`code goes here
  and on the new lines without additional formatting\`\}
</Code>

<BodyText>
  Some inline code <Code inline>goes here</Code>
</BodyText>
`}
          </Code>
        </section>
      </Container>
    </div>
  );
};

export default Showcase;
