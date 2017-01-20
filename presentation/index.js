// Import React
import React from "react";
import Notes from "./notes";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  browserifyLogo: require("../assets/browserify-logo.svg"),
  bundlersLogo: require("../assets/bundlersLogo.png"),
  city: require("../assets/city.jpg"),
  graphSPAvsSST: require("../assets/graph-SPAvsSST.png"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  monstrousJS: require("../assets/monstrousJS.png"),
  reasonableJS: require("../assets/reasonableJS.png"),
  webpackLogo: require("../assets/webpack-logo.svg")
};

preloader(images);

const theme = createTheme({
  primary: "#ffffff",
  webpackBlue: "#7B9FE2",
  black: "#000000"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>

          <Slide transition={["zoom"]} bgColor="primary">
            <Image src={images.webpackLogo} margin="0px auto 40px" height="293px"/>

            <Heading size={1} fit caps lineHeight={1} textColor="webpackBlue">
              Introduction to WebPack
            </Heading>
            <Heading textSize="1.5em" size={1} textColor="webpackBlue">
              by Yi Chao
            </Heading>
            <Link href="https://github.com/FormidableLabs/spectacle">
              <Text bold caps textColor="webpackBlue">View on Github</Text>
            </Link>
             <Text textSize="1.5em" margin="20px 0px 0px" bold>REMOVE THIS TEXT </Text>
          </Slide>


          <Slide transition={["slide"]} bgColor="primary" notes={Notes.slide2}>
            <Image src={images.graphSPAvsSST} margin="0px auto 40px" height="500px"/>
            <Heading size={2} lineHeight={1} textColor="primary" textFont="primary">
              SPA vs SST
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary" notes={Notes.slide3}>
            <Image src={images.monstrousJS} margin="40px auto 40px auto" height="500px"/>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary" notes={Notes.slide4}>
            <Image src={images.reasonableJS} margin="40px auto 40px auto" height="500px"/>
          </Slide>


          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading caps fit >Bundling</Heading>
            <List>
              <Appear><ListItem>What is bundling?</ListItem></Appear>
              <Appear><ListItem>Answer: Bundling is the process of stitching together a group of modules (and their dependencies) into a single file (or group of files) in the correct order.</ListItem></Appear>
              <Appear><ListItem>Problem: Let's say if you're using a non-native module system like CommonJS or AMD (even native module ES6 file formats). Browsers cannot interpret this? </ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary" notes={Notes.slide6}>
            <Heading caps fit textColor="webpackBlue">Bundlers</Heading>
            <Layout>
              <Fill>
                <Image src={images.bundlersLogo} margin="0px auto 40px auto" height="500px"/>
              </Fill>
              <Fill>
              <List>
                  <Appear><ListItem>Module bundlers like browserify and webpack bundle and/or load your JS modules.</ListItem></Appear>
                  <Appear><ListItem>They can have additional features like recompiling code after you make a change or source-maps</ListItem></Appear>
              </List>
              </Fill>
            </Layout>
          </Slide>


          <Slide transition={["slide"]} bgColor="secondary" textColor="primary" notes={Notes.slide7}>
            <Heading caps fit >Gulp vs Grunt vs Webpack vs Browserify</Heading>
            <List>
              <Appear><ListItem>What's the difference between them?</ListItem></Appear>
              <Appear><ListItem>Grunt and Gulp are task runners (and they have their own individual differences). You use task runners to help with a larger build problem</ListItem></Appear>
              <Appear><ListItem>Webpack and Browserify are package bundlers. Again they handle going through the dependencies (ie load order) and concatenating the JS files so that the file (or files) can be used in the browser.</ListItem></Appear>
              <Appear><ListItem>Bundlers can do several things that task-runners do like transpile source code (e.g. babel).</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary" notes={Notes.slide6}>
            <Heading caps fit textColor="webpackBlue">Bundlers</Heading>
            <Layout>
              <Fill>
                <Image src={images.bundlersLogo} margin="0px auto 40px auto" height="500px"/>
              </Fill>
              <Fill>
              <List>
                  <Appear><ListItem>Module bundlers like browserify and webpack bundle and/or load your JS modules.</ListItem></Appear>
                  <Appear><ListItem>They can have additional features like recompiling code after you make a change or source-maps</ListItem></Appear>
                  <Appear><ListItem>Task Runners vs Bundlers</ListItem></Appear>
              </List>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading caps fit textColor="webpackBlue">Bundlers</Heading>
            <Layout>
              <Fill>
                <Image src={images.bundlersLogo} margin="0px auto 40px auto" height="500px"/>
              </Fill>
              <Fill>
              <List>
                  <Appear><ListItem>Inline style based theme system</ListItem></Appear>
                  <Appear><ListItem>Autofit text</ListItem></Appear>
                  <Appear><ListItem>Flexbox layout system</ListItem></Appear>
                  <Appear><ListItem>React-Router navigation</ListItem></Appear>
                  <Appear><ListItem>PDF export</ListItem></Appear>
                  <Appear><ListItem>And...</ListItem></Appear>
              </List>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>


          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
                 <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
                 <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>


          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>


          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>


          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>


          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>


          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>


          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
