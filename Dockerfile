FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY src/ ./src/
COPY public/ ./public/
EXPOSE 5173
CMD ["npm", "run", "preview"]
