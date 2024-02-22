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

Todos: 
[x] - Profile picture added
[x] - Call/email/buttons that will link correctly 
[x] - pretty css for buttons, that hover and change slightly 
[ ] - polaroid slideshow with descriptions https://www.w3schools.com/css/css3_images.asp 
[ ] - slideshow of google reviews (dynamic?)
[ ] - Make reviews animate in using this vid: https://www.youtube.com/watch?v=T33NN_pPeNI 
[x] - Add paralax scrolling with mountains and trees like this: https://www.youtube.com/watch?v=mxHoPYFsTuk 