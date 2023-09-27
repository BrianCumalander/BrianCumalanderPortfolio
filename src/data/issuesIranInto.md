#Record of issues that I ran in to--

I began this project with yarn. It worked great locally but would fail every build on Netlify.
I switched to NPM, still wouldn't build. Had an error, "Failed during stage 'building site': Build script returned non-zero exit code: 2".
I googled "Netlify, Failed during stage 'building site': Build script returned non-zero exit code: 2" and found "https://stackoverflow.com/questions/64468843/netlify-deployment-failed-during-stage-building-site-build-script-returned-n", tried all of their ideas but it was still failing the build. Tips at Netlify also failed - "https://docs.netlify.com/configure-builds/troubleshooting-tips/#build-fails-on-warning-message".
##Resolution--
Reviewed my Build settings, saw that Publish directory was set nto "Build", but noticed that the Build directory never existed on my local build. Instead, the folder was called dist.
In Netlify's build settings I changed it from Build to dist and ran the build again, it ran successfully. I was also able to change the CI=false setting back to 'npm run build'. I changed node from version 16 back to 18 on Netlify. Ran the build again and it still works.
##Thoughts--
-Don't know if switching back to yarn will have any effect.
