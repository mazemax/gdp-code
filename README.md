## Job Ads Checkout

### Requirements

* Mac OS X, Windows, or Linux
* [Yarn](https://yarnpkg.com/) package + [Node.js](https://nodejs.org/) v8 or
  newer
* Latest Docker
  
### Directory Layout

Before you start, take a moment to see how the project structure looks like:

```
.
├── /build/                     # The folder for compiled output
├── /node_modules/              # 3rd-party libraries and utilities
├── /public/                    # Static files which are copied into the /build/public folder
├── /src/                       # The source code of the application
│   ├── /components/            # React components
│   ├── /data/                  # GraphQL server schema and data models
│   ├── /routes/                # Page/screen components along with the routing information
│   ├── /client.js              # Client-side startup script
│   ├── /config.js              # Global application settings
│   ├── /server.js              # Server-side startup script
│   └── ...                     # Other core framework modules
├── /test/                      # Unit and end-to-end tests
├── /tools/                     # Build automation scripts and utilities
│   ├── /lib/                   # Library for utility snippets
│   ├── /build.js               # Builds the project from source to output (build) folder
│   ├── /bundle.js              # Bundles the web resources into package(s) through Webpack
│   ├── /clean.js               # Cleans up the output (build) folder
│   ├── /copy.js                # Copies static files to output (build) folder
│   ├── /deploy.js              # Deploys your web application
│   ├── /postcss.config.js      # Configuration for transforming styles with PostCSS plugins
│   ├── /run.js                 # Helper function for running build automation tasks
│   ├── /runServer.js           # Launches (or restarts) Node.js server
│   ├── /start.js               # Launches the development web server with "live reload"
│   └── /webpack.config.js      # Configurations for client-side and server-side bundles
├── Dockerfile                  # Commands for building a Docker image for production
├── package.json                # The list of 3rd party libraries and utilities
└── yarn.lock                   # Fixed versions of all the dependencies
```
