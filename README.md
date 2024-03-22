# https://macstechservice.com/
Website for tech business in Brush, CO

## Technologies used
* Bun javascript runtime and bundler 
* Firebase hosting service 
    * SSL, dynamic deployment, Google analytics
* HTML, CSS, Javascript
* Embedded Google Map
* Parallax css scrolling with 3D effect 
* Responsive web design that resizes for smaller devices 

## To run in dev with bun: 
```
bun build src/app.js --outdir ./public --watch
#then spool up the ./public/index.html file with LiveServer
```
## Deploy to firebase: 
```
#Run the build command
bun build src/app.js --outdir ./public
firebase deploy

```

## Deploy a preview version for a week to send to client
```
firebase hosting:channel:deploy preview_1
```

Todos: 
- [x] - Profile picture added
- [x] - Call/email/buttons that will link correctly 
- [x] - pretty css for buttons, that hover and change slightly 
- [ ] - polaroid slideshow with descriptions https://www.w3schools.com/css/css3_images.asp (waiting on client pictures)
- [ ] - slideshow of google reviews (dynamic?)
- [ ] - Make reviews animate in using this vid: https://www.youtube.com/watch?v=T33NN_pPeNI 
- [x] - Add paralax scrolling with mountains and trees like this: https://www.youtube.com/watch?v=mxHoPYFsTuk 
- [ ] - Cyprus testing lib? 