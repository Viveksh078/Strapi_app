FROM node:18

# System dependencies for better-sqlite3
RUN apt-get update && apt-get install -y python3 make g++ && apt-get clean

WORKDIR /app

COPY package*.json ./

# Ensure better-sqlite3 gets built properly
RUN npm install --legacy-peer-deps

COPY . .

CMD ["npm", "run", "develop"]

