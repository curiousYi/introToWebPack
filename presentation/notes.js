const slide2 = "Context of the problem: Increase in SPA application => increasing javascript in our programs and on the browser";
const slide3 = "As developers we split our codebase into smaller files to for easier maintenance and sanity. The issue however is that if we do not bundle our JS files, this means more network requests which slow down our application. Bundling "
const slide4 = "On the other hand if the JS files were split into different files like this then the request would be much more reasonable. All right but what are the tradeoffs with this solution? Well reading modules from the browser takes a LOT longer than reading from disk. Additionally the load order matters. Invitation for questions at this point? "
const slide5 = "Essentially by bundling or 'concatenate' all our files into one big file (or several big files), we reduce the number of network requests. Another common approach is to minify our files (e.g. removing unnecssary white space, comments, etc) in order to reduce the file size without effecting functionality of our code. Less data = less processing time. #2 CommonJS and AMD are like specifications for module loading? "
const slide6 = "Soln! Browserify, Webpack, and other mondule bundlers/loaders come into play. Note they can offer a lot of other features."
const slide7 = "Mention that I am still exploring this and only consider myself somewhat familiar with webpack. Also not going to go into what differentiates webpack from browserify. Invitation for questions at this point?"
const slide8 = "Mention that I am still exploring this and only consider myself somewhat familiar with webpack. Also not going to go into what differentiates webpack from browserify. Invitation for questions at this point?"


export default {
    slide2: slide2,
    slide3: slide3,
    slide4: slide4,
    slide5: slide5,
    slide6: slide6,
    slide7: slide7,
    slide8: slide8
}
