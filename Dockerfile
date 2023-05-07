FROM node:12
# Layer One
WORKDIR /app
# Layer Two
COPY package*.json ./

RUN npm install

COPY ..

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "start"]