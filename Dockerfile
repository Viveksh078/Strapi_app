FROM node:18

# Install required system deps
RUN apt-get update && apt-get install -y python3 make g++ && apt-get clean

WORKDIR /app

COPY package*.json ./

# 🔧 Force native module install (important for better-sqlite3)
RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 1337

CMD ["npm", "run", "develop"]
