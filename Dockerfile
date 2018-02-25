# cmd to run with docker file ( build + run)
# Build:
# docker build --no-cache -t payalcsureja/angular:dev .
# Run:
# docker run -p 4200:4200 -it --rm -d --name pcsangular payalcsureja/angular:dev

# Compose:
# docker-compose build
# docker-compose up -d

#cmd to run without docker file inside dir to get $pwd
#docker run -p 4200:4200 --rm -d -v $(pwd):/usr/src/myNgFirebase -w "/usr/src/myNgFirebase" --name pcsangular node npm start
#cmd to run without docker file from any path
#docker run -p 4200:4200 --rm -d -v /c/Users/prash/Documents/www/myNgFirebase:/usr/src/myNgFirebase:rw -w "/usr/src/myNgFirebase" --name pcsangular node npm start

# Create image based on the official Node 6 image from dockerhub
FROM node:latest

# Set metadata for an image
LABEL Description="Dockerfile for MEAN stack angular client"
LABEL Version="0.0.1"
LABEL Author="Payal Sureja <payalcsureja@gmail.com>"

# node setup
ENV NODE_PATH=/usr/local/lib/node_modules/:/usr/local/lib NODE_ENV=development
ENV NODE_ENV=development
#ENV PORT=4200

# Install Prerequisites
#RUN npm install --quiet -g typescript @angular/cli && npm cache clean
RUN npm install --quiet -g --unsafe-perm typescript @angular/cli

# payalcsureja/nodeserver
RUN mkdir -p /usr/src/myNgFirebase
VOLUME ["/c/Users/prash/Documents/www/myNgFirebase"]
COPY . /usr/src/myNgFirebase
WORKDIR /usr/src
RUN chmod -R 776 *
WORKDIR /usr/src/myNgFirebase
RUN ls
RUN npm install

# Expose the port the app runs in
# Ports generic 80 = HTTP, 443 = HTTPS
#EXPOSE 80:80
#EXPOSE 443:443

# Port 4200 for angular-client
#EXPOSE 4200:4200

# Port 3000 for node-express server
#EXPOSE 3000:3000

# Port 5858 for node debug
#EXPOSE 5858:5858

# Port 8080 for node-inspector
#EXPOSE 8080:8080

# Port 35729 for livereload
#EXPOSE 35729:35729

EXPOSE 4200

# Serve the app
CMD ["npm", "start"]