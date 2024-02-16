# mactechservice
Website for my dad

## to run in dev with bun: 
```
bun build src/app.js --outdir ./public --watch
#then spool up the ./public/index.html file with LiveServer
```
## to deploy to firebase: 
```
#Run the build command
bun build src/app.js --outdir ./public
firebase deploy

```