FROM node:10

#Set non-root user for running in ICP node = 999

# Create app directory
WORKDIR /home/node

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .
RUN groupmod -g 999 node && usermod -u 999 -g 999 node
USER 999
EXPOSE 3000
CMD [ "node", "./bin/www" ]