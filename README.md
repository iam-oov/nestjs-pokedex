<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Mode Development
1. Clonar el repositorio
2. Ejecutar
```
yarn install
```
3. Tener nest CLI instalado
```
npm i -g @nestjs/cli
```
4. Levantar la DB
```
docker-compose up -d
```
5. Clonar el archivo ```__.env.example__``` y renombrar a ```__.env__```

6. Ejectur la aplicación en Dev:
```
yarn start:dev
```

7.  Reconstruir la DB con la semilla
```
http://localhost:3000/api/v2/seed
```

# Stack usado
* MongoDb
* Nest

# Production Build
1. Crear el archivo ```__.env.prod__``` basado en el ```__.env.example__```
2. Crear la nueva imagen docker:
```
docker compose -f docker-compose.prod.yml --env-file .env.prod up --build -d
```