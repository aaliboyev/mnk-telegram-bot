FROM node:18-bookworm-slim
LABEL authors="aaliboyev"
RUN mkdir -p /app
WORKDIR /app
COPY . .

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
#COPY .env.${NODE_ENV} .env
#RUN rm .env.local .env.production

RUN npm install
RUN npm run build

CMD ["npm", "start"]
