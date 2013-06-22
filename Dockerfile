from	heroku/heroku-buildpack-nodejs
maintainer  Solomon Hykes <solomon@dotcloud.com>
add	.	/app
run	/buildpack/bin/compile /app /tmp
cmd	["sh", "-c", "PORT=5000 /app/bin/node /app/web.js"]
expose 5000
