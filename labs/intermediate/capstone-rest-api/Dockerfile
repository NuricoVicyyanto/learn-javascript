# Build from the labs/ directory:
#   docker build -f intermediate/capstone-rest-api/Dockerfile -t bookmark-api .
FROM node:24-alpine
WORKDIR /app
COPY package.json ./
COPY intermediate/capstone-rest-api ./intermediate/capstone-rest-api
USER node
EXPOSE 8080
CMD ["node", "intermediate/capstone-rest-api/src/server.js"]
