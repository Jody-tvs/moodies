# Utiliser l'image officielle de Node.js
FROM node:18

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json pour installer les dépendances
COPY package.json package-lock.json ./
RUN npm install --no-optional
RUN npm config set legacy-peer-deps true

# Copier tout le code du frontend
COPY . .

# Exposer le port 5173 (Vite)
EXPOSE 5173

# Démarrer l'application
CMD ["npm", "run", "dev"]
