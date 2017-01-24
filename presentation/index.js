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
  egBasic: require("../assets/basic.png"),
  egLoader: require("../assets/loader.png"),
  egPlugin: require("../assets/plugins.png"),
  esprima: require("../assets/esprima.png"),
  graphSPAvsSST: require("../assets/graph-SPAvsSST.png"),
  goodbye:require("../assets/goodBye.gif"),
  monstrousJS: require("../assets/monstrousJS.png"),
  reasonableJS: require("../assets/reasonableJS.png"),
  tooManyNetworkRequests: require("../assets/tooManyNetworkRequests.png"),
  vendorCode: require("../assets/vendorCode.png"),
  webpackLogo: require("../assets/webpack-logo.svg"),
  whatIsWebpack: require("../assets/what-is-webpack.png")
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

          <Slide transition={["slide"]} bgColor="primary" notes={Notes.slide2}>
            <Layout>
            <Image src={images.reasonableJS} margin="40px auto 40px auto" height="500px"/>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary" notes={Notes.slide3}>
            <Layout margin="0px auto 40px auto" >
            <Image src={images.tooManyNetworkRequests}  margin="0px 50px auto auto" height="500px"/>
              <List fit>
                  <Appear><ListItem>Bundling!</ListItem></Appear>
                  <Appear><ListItem>Bundling is the process of stitching together a group of modules (and their dependencies) into a single file (or group of files).</ListItem></Appear>
                  <Appear><ListItem>Issues you have to be aware of in the bundling process: load dependency,
                  AMD vs CommonJS, etc </ListItem></Appear>
                  <Appear><ListItem>Popular Bundlers: Browserify, Webpack</ListItem></Appear>
              </List>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary" notes={Notes.slide4}>
            <Layout>
            <Image src={images.whatIsWebpack} margin="40px auto 40px auto" height="100%" width="100%"/>
            </Layout>
          </Slide>

         <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading caps textColor="webpackBlue">Basic Setup</Heading>
                <CodePane
                  lang="jsx"
                  source={require("raw-loader!../assets/code-examples/basicWebpack.config.js.example")}
                  padding="40px 40px 40px 40px"
                  fit
                  showLineNumbers={true}
                />
          </Slide>

          <Slide transition={["slide"]} bgColor="primary" notes={Notes.slide3}>
            <Heading textColor="webpackBlue" margin="0px" padding="0px 0px 20px 0px" size="2" > Bundling Overview </Heading>
            <Layout margin="0px auto 40px auto" >
            <List fit height="100%">
                  <Appear><ListItem>Reads the index/entry file. Creates an Abstract Syntax Tree (AST) using a library called Esprima. </ListItem></Appear>
                  <Appear><ListItem>Parses the AST and identifies all the associated dependencies.</ListItem></Appear>
                  <Appear><ListItem>Resolve those dependencies/read those files. Repeat until no more depedencies are found</ListItem></Appear>
              </List>
            <Appear><Image src={images.esprima}  margin="0px 50px auto auto" height="100%"/></Appear>
            </Layout>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading caps textColor="webpackBlue">Loaders</Heading>
                <CodePane
                  lang="jsx"
                  source={require("raw-loader!../assets/code-examples/loaderWebpack.config.js.example")}
                  margin="20px auto"
                />
          </Slide>


          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
                <CodePane
                  lang="jsx"
                  source={require("raw-loader!../assets/code-examples/pluginsWebpack.config.js.example")}
                />
          </Slide>

           <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="webpackBlue">
              Code Splitting
            </Heading>
            <Markdown>
              {`
* For big applications it's not efficient to put everything onto a single file. Especially if some blocks
of code are only required under some situations.
* Webpack can split your codebase into chunks which are loaded on demand.
* Lets look at a specific use-case where this becomes useful.
              `}
            </Markdown>
          </Slide>

            <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/code-examples/pluginsWebpack.config.js.example")}
            ranges={[
              {
              loc: [0, 34], title: "Recap of what we covered so far"
            },
              {
              loc: [3, 7], note: "Entry point for Webpack "
            }, {
              loc: [23, 31], note: "Loader"

            },
            {
              loc: [18, 22], note: "Output file config"
            }
            ]}
            showLineNumbers={true}
          />

          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Layout>
              <Fill>
              <Image src={images.vendorCode} height= "100%" width="100%"/>
              </Fill>

            </Layout>
          </Slide>

         <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
                <CodePane
                  lang="jsx"
                  source={require("raw-loader!../assets/code-examples/advancedWebpackConfig.js.example")}
                  fit
                  showLineNumbers={true}
                  height="100%"
                />
          </Slide>

          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading textColor="webpackBlue">
                Recap
            </Heading>

              <List fit>
                  <Appear><ListItem>Webpack is a popular module bundler for your static assets. It bundles your file sthrough a dependency graph</ListItem></Appear>
                  <Appear><ListItem>Learned about the basic webpack config file, loaders, and plugins </ListItem></Appear>
                  <Appear><ListItem>Went over Code-splitting but webpack has a ton of other features as well!</ListItem></Appear>
              </List>
          </Slide>



          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading size={1} fit caps lineHeight={1} textColor="webpackBlue">
                Acknowledgements
            </Heading>
          <Markdown>
            {`
  * Stephen Grider, James Da Costa, + many others
  * Webpack Team
  * https://goo.gl/forms/pGnvQH9n17KotiQf2
  * https://github.com/curiousyi/introtowebpack
  * Email: ychao021@gmail.com
            `}
          </Markdown>
          </Slide>

          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Image src={images.goodbye} margin="0px auto 40px" height="100%"/>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
