FROM node:8.10.0-alpine

# Set a working directory
RUN mkdir app
WORKDIR /app

COPY ./package.json ./
COPY ./yarn.lock ./

# Install Node.js dependencies
RUN yarn global add webpack webpack-cli npx
RUN yarn install

# Copy application files
COPY ./ ./

RUN yarn run build

# Run the container under "node" user by default
USER node

CMD [ "node", "build/server.js" ]
