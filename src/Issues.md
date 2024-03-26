#Record of issues that I ran in to--

issue/resolve:
Wrong build folder named on Netlify configuration but ran fine locally.

Process:
I began this project with yarn. It worked great locally but would fail every build on Netlify. 
I switched to NPM, still wouldn't build. Had an error, "Failed during stage 'building site': Build script returned non-zero exit code: 2".
I googled the error and found "https://stackoverflow.com/questions/64468843/netlify-deployment-failed-during-stage-building-site-build-script-returned-n".
Tried all of their ideas but it was still failing the build, same error.
Tips at Netlify also failed - "https://docs.netlify.com/configure-builds/troubleshooting-tips/#build-fails-on-warning-message".

##Resolution:
I reviewed my 'build settings' on netlify.com, saw that Publish directory was set to "Build", but noticed that the Build directory never existed on my local build. Instead, the folder was called 'dist'.
In Netlify's build settings I changed it from 'Build' to 'dist' and ran the build again, and it ran successfully. I also reverted the changes I made from my previous attempts that hadn't fixed the issue, and the build still ran successfully.
I could probably switch back to using yarn but I'm going to leave it as NPM since it runs without any issues.
