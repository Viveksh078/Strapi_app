FROM node:18

# System dependencies needed to build better-sqlite3
RUN apt-get update && apt-get install -y python3 make g++ && apt-get clean

# Create app directory
WORKDIR /app

# Install app dependencies first
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Bundle app source
COPY . .

# Expose app port
EXPOSE 1337

# Start Strapi
CMD ["npm", "run", "develop"]

