FROM node:18-alpine

# Crear directorio de trabajo
WORKDIR /app

# Instalar Angular CLI globalmente
RUN npm install -g @angular/cli@17

# Copiar package.json y package-lock.json
COPY ./package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de la aplicación
COPY . .

# Exponer el puerto 4200
EXPOSE 4200

# Comando por defecto
CMD ["ng", "serve", "--host", "0.0.0.0", "--disable-host-check"]
