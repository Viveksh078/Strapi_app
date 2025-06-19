# Use an official Node.js runtime as the base image
FROM node:18-alpine
 
# Set working directory inside the container
WORKDIR /app
 
# Copy package.json and package-lock.json first to leverage Docker caching
COPY package.json package-lock.json ./
 
# Install all dependencies (including dev dependencies)
RUN npm install
 
# Install nodemon globally for hot reloading
RUN npm install -g nodemon
 
# Copy the rest of the application files
COPY . .
 
# Build the Strapi application
RUN npm run build
 
# Expose Strapi's default port
EXPOSE 1337
 
# Start Strapi in development mode with nodemon
CMD ["npm", "run", "develop"]
