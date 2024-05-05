# progressive-web-application-text-editor-challenge
This repo will serve to satisfy the requirements for the GWU Coding Boot Camp Module 19 Challenge - Progressive Web Applications (PWA) Challenge: Text Editor

## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Technologies Used](#technologies-used)
- [Credits](#credits)
- [Contact](#contact)

## Description
This challenge involves creating a Progressive Web Application (PWA) for a text editor. The application's intent is to provide users with a responsive and offline-capable text editing experience. It should utilize IndexedDB for storing data, work offline, automatically save content, be bundled with webpack, include a service worker with workbox for caching static assets, use babel for async/await functionality, and have a generated manifest.json for PWA installation.

## User Story

AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use

## Acceptance Criteria

GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Render
THEN I should have proper build scripts for a webpack application

## Installation



## Usage


## Contributing
If you have suggestions or contributions to add, please follow the guidelines listed below. Pull requests will be reviewed in the order that they are received.
- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and commit them.
- Push to the branch.
- Create a new Pull Request.

## License
This challenge is provided under the MIT License. See the [LICENSE](LICENSE) file for details.


## Technologies Used
HTML

CSS

JavaScript

Service Worker with Workbox

Babel

Git/GitHub

Manifest.json

Webpack

IndexedDB

## Credits
Development was assisted by the following resources:
 - Xpert Learning Assistant provided by the GWU Coding Boot Camp. Provided general guidance and assistance with Installation and concise description of application.
 - Referenced the Activities in the GWU Coding Boot Camp class materials for Webpack configuration (https://git.bootcampcontent.com/George-Washington-University/GWU-VIRT-FSF-PT-11-2023-U-LOLC/-/tree/main/19-PWA/01-Activities?ref_type=heads)
 - Html-webpack-plugin documentation and installation (https://www.npmjs.com/package/html-webpack-plugin)
 - Webpack-pwa-manifest documentation and installation (https://www.npmjs.com/package/webpack-pwa-manifest)
 - Workbox-webpack-plugin documentation and installation (https://www.npmjs.com/package/workbox-webpack-plugin)
 - @babel/present-env documentation and installation (https://www.npmjs.com/package/@babel/preset-env)
 - style-loader documentation and installation (https://www.npmjs.com/package/@babel/preset-env)
 - css-loader documentation and installation (https://www.npmjs.com/package/css-loader)
 - Documentation reference for implementation of IndexedDB in this application (https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
 - Class material referenced for implementation of IndexedDB in this application (https://git.bootcampcontent.com/George-Washington-University/GWU-VIRT-FSF-PT-11-2023-U-LOLC/-/tree/main/19-PWA/01-Activities/24-Stu_IndexedDB-CRUD?ref_type=heads)
 - Documentation referenced for PWA Service Workers (https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers)
## Contact
To contact the owner of this repo, OrganicClick, please reach out via OrganicClick@exampleemail.com