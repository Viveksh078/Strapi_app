FROM node:18

# 1️⃣ Install system dependencies for better-sqlite3
RUN apt-get update && apt-get install -y python3 make g++ && apt-get clean

# 2️⃣ Set working directory
WORKDIR /app

# 3️⃣ Copy only dependency files first (for caching)
COPY package*.json ./

# 4️⃣ Install node packages (including better-sqlite3)
RUN npm install --legacy-peer-deps

# 5️⃣ Copy rest of the project files
COPY . .

# 6️⃣ Build the Strapi project for production
RUN npm run build

# 7️⃣ Start the app (production mode)
CMD ["npm", "start"]



