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

import CodeSlide from 'spectacle-code-slide';


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
  magicGif: require("../assets/magicGif.gif"),
  markdown: require("../assets/markdown.png"),
  monstrousJS: require("../assets/monstrousJS.png"),
  reasonableJS: require("../assets/reasonableJS.png"),
  tooManyNetworkRequests: require("../assets/tooManyNetworkRequests.png"),
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
        <Deck transition={["zoom", "slide"]} transitionDuration={500} progress="none">

          <Slide transition={["zoom"]} bgColor="primary">
            <Image src={images.webpackLogo} margin="0px auto 40px" height="293px"/>

            <Heading size={1} fit caps lineHeight={1} textColor="webpackBlue">
              Introduction to WebPack
            </Heading>
            <Heading textSize="1.5em" size={1} textColor="webpackBlue">
              by Yi Chao
            </Heading>
           {/* <Link href="https://github.com/FormidableLabs/spectacle">
              <Text bold caps textColor="webpackBlue">View on Github</Text>
            </Link>*/}
          </Slide>

          <Slide transition={["slide"]} bgColor="primary" notes={Notes.slide3}>
            <Layout>
            <Image src={images.reasonableJS} margin="40px auto 40px auto" height="500px"/>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary" notes={Notes.slide4}>
            <Image src={images.tooManyNetworkRequests} height="800px"/>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary" notes={Notes.slide6}>
            <Heading caps textColor="webpackBlue">Bundlers</Heading>
            <Layout margin="0px auto 40px auto" >
              <Image src={images.bundlersLogo} margin="0px 50px auto auto" height="500px"/>
              <List fit>
                  <Appear><ListItem>What is bundling?</ListItem></Appear>
                  <Appear><ListItem>Answer: Bundling is the process of stitching together a group of modules (and their dependencies) into a single file (or group of files) in the correct order.</ListItem></Appear>
                  <Appear><ListItem>Popular Bundlers: Browserify, Webpack</ListItem></Appear>
              </List>
            </Layout>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading caps textColor="webpackBlue">Fundamentals</Heading>
            <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/code-examples/fundamentals/webpack.config.js.example")}
            margin="20px auto"
            />
          </Slide>


          <Slide>
            <Layout margin="0px auto 40px auto" >
            <Fill>
              <Layout padding="0px auto 100px auto" >
                <CodePane
                  lang="jsx"
                  source={require("raw-loader!../assets/code-examples/module_bundling/webpack.config.js.example")}
                  padding="40px 40px 40px 40px"
                />
              </Layout>

             {/* Having an empty list block until I figure out how to insert spaces*/}
            </Fill>
            </Layout>
          </Slide>

  {/*
          <Slide>
            <Layout margin="0px auto 40px auto" >
            <Fill>
              <Layout padding="0px auto 100px auto" >
                <CodePane
                  lang="jsx"
                  source={require("raw-loader!../assets/code-examples/module_bundling/webpack.config.js.example")}
                  padding="40px 40px 40px 40px"
                />
              </Layout>

             {/* Having an empty list block until I figure out how to insert spaces*/}
    {/*
              <List>

              </List>
              <Layout padding="0px auto 40px auto" >
                <CodePane
                  lang="jsx"
                  source={require("raw-loader!../assets/code-examples/code_splitting/webpack.config.js.example")}
                  padding="40px 40px 40px 40px"
                />
              </Layout>
            </Fill>

             <Fill>
              <List margin="0px auto 40px 40px">
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
        */}

          {/*
          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/exampleCode.js.example")}
            ranges={[{
              loc: [0, 1], title: "get template"
            }, {
              locs: [[2, 3], [9, 10]], title: "get some data"
            }, {
              loc: [3, 4], title: "clone content"
            }, {
              loc: [4, 8], title: "update elements"
            }, {
              loc: [8, 9], title: "append fragment"
            }]}
            showLineNumbers={false}
          />

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

        */}

        </Deck>
      </Spectacle>
    );
  }
}
