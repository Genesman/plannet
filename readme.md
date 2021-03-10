# Plannet Login & Cuotas

Vistas HTML para Plannet - Login y Cuotas

## Como usar

Para hacer el uso de gul para la compilación de estilos y minificación de los mismo y tambien los js seguir los siguientes pasos

1. Instalar Dependencias de Desarrollo (Dev Dependencies)
```sh
npm install
```
2. Para inciar el servidor y comenzar el desarrollo
```sh
npm run dev
```
3. Para generar los archivos minificados y pasar a servidor de producción
```sh
npm run prod 
```

# Configuración de rutas


Para cambiar la ruta de los archivos y sus destinos editar el **config.js**
```sh
{
  config: {
      ...
      port: 9050 // browser preview port
  },
  paths: {
     root: "./",
     src: {
        base: "./src",
        css: "./src/css",
        js: "./src/js",
        img: "./src/img"
     },
     dist: {
         base: "./dist",
         css: "./dist/css",
         js: "./dist/js",
         img: "./dist/img"
     },
     build: {
         base: "./build",
         css: "./build/css",
         js: "./build/js",
         img: "./build/img"
     }
  }
  ...
}
```
