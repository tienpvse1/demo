FROM node:lts-alpine
WORKDIR /usr/src/app
# install pnpm package manager
RUN npm install -g pnpm
COPY ["package.json", "pnpm-lock.yaml", "npm-shrinkwrap.json*", "./"]
# use pnpm package manager
RUN pnpm install 
COPY . .
RUN pnpm build
# app should run at port 8080
EXPOSE 8080
RUN chown -R node /usr/src/app
CMD ["node", "dist/main"]
