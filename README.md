# dog-namer-app

A foster dog namer web application.

### Screenshots

|                                                       <b>Draft Landing Page</b>                                                        |
| :------------------------------------------------------------------------------------------------------------------------------------: |
| ![Draft Landing Page](https://github.com/Faraja17/dog-namer-app/blob/main/Screen%20Shot%202022-08-25%20at%202.14.28%20PM.png?raw=true) |

|                                                       <b>Newsletter</b>                                                        |
| :----------------------------------------------------------------------------------------------------------------------------: |
| ![Newsletter](https://github.com/Faraja17/dog-namer-app/blob/main/Screen%20Shot%202022-08-24%20at%201.42.34%20AM.png?raw=true) |

### Links

[Front end in React on Vercel!](https://foster-dog-namer.vercel.app/)

[Server on AWS!](http://54.242.73.146/)

### What I learned

8/27/22 - I ran into a lot of problems attempting to deploy the React version to the existing Heroku server. I followed [these steps](https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/), but got stuck at step two. the "Hello from server!" message would not appear. So I stopped to take a break for that day. The next day, it miraculously worked with no intervention!

Next, I got stuck in step five with adding a build script to the server package.json file (by the way, my server is app.js in dog-namer-app, not index.js in server, but that wasn't the problem). Kept getting this error: Error: ENOENT: no such file or directory, stat '/Users/aja/Projects/foster-dog-namer/build/index.html' The directions did not say anything about first running `npm run build` within the React directory to create the build folder! After hours of research, and trial and error, I found that information [here](https://stackoverflow.com/questions/41495658/use-custom-build-output-folder-when-using-create-react-app). In reading the Heroku docs, I had also removed `/build` from `gitignore` before I learned that I needed to create the build folder, so not sure if that helped!

Great! So now I have successfully deployed the react app locally from port 3000 to port 3001, but still working on an error deploying to Heroku: "sh: 1: cd: can't cd to foster-dog-namer
-----> Build failed"
