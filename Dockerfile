# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Install build tools required for native modules like better-sqlite3
RUN apt-get update && apt-get install -y \
    python3 make g++ \
    && rm -rf /var/lib/apt/lists/*

# Copy package.json and install dependencies
COPY package*.json ./

RUN npm install

# Copy rest of the code
COPY . .

# Expose the Strapi port
EXPOSE 1337

# Start the application
CMD ["npm", "run", "develop"]

