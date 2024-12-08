# Usa Node.js versione 18 come immagine di base
FROM node:18

# Imposta la directory di lavoro nel container
WORKDIR /app

# Copia i file package.json e package-lock.json nel container
COPY package*.json ./

# Installa le dipendenze
RUN npm install

# Copia il resto del progetto nel container
COPY . .

# Compila il progetto (TypeScript -> JavaScript)
RUN npm run build

# Esponi la porta su cui gira il backend (porta 3000 di default in NestJS)
EXPOSE 3001

# Comando per avviare l'app in modalità produzione
CMD ["npm", "run", "start:prod"]
