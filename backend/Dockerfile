FROM node:18
WORKDIR /app
COPY package.json .

RUN rm -r /etc/localtime
RUN ln -sf /usr/share/zoneinfo/Asia/Jakarta /etc/localtime
RUN npm install
RUN npm install mysql2
RUN npm install -g nodemon
RUN npm install --save sequelize
RUN npm install --save sequelize-cli
COPY . .
COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh
EXPOSE 3000
CMD ["/app/entrypoint.sh"]