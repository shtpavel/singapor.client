# How to start

**Note** that this seed project requires node v4.x.x or higher and npm 2.14.7.

**Here is how to [speedup the build on Windows](https://github.com/mgechev/angular2-seed/wiki/Speed-up-the-build-on-Windows)**.

In order to start the seed use:


```bash
# install the project's dependencies
npm install
# watches your files and uses livereload by default
npm start

# dev build
npm run build.dev
# prod build
npm run build.prod
```

_Does not rely on any global dependencies._

# Configuration

Default application server configuration

```javascript
var PORT             = 5555;
var LIVE_RELOAD_PORT = 4002;
var DOCS_PORT        = 4003;
var APP_BASE         = '/';
```

Configure at runtime

```bash
npm start -- --port 8080 --reload-port 4000 --base /my-app/
```