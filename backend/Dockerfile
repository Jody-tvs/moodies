# Utiliser l'image officielle de Node.js
FROM node:18

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json pour installer les dépendances
COPY package.json package-lock.json ./
RUN npm install

# Copier tout le code du backend
COPY . .

# Exposer le port 5000
EXPOSE 5000

# Démarrer l'application
CMD ["npm", "run", "dev"]
