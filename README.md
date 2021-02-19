# GraphQL

1. Aprende a crear una API con GraphQL, Node y TypeScript.
2. Almacena tus datos en una base de datos de MongoDB y despliégala en Vercel hacia producción.
3. Crea un frontend con React y Apollo Client para consumirla.

**Playlist:** [Curso básico de GraphQL](https://www.youtube.com/playlist?list=PL4n0o4LiEbG-UAnyVmjhZe0WhpjyYig3q)

## Dependencias de producción

| Dependencia       | Descripción |
| ----------------- | ----------- |
| react             | ReactJS     |
| react-dom         | ReactJS     |
| react-router-dom  | ReactJS     |
| styled-components | (Pendiente) |

**Instalación:** `npm i react react-dom react-router-dom styled-components`

## Dependencias de desarrollo

| Dependencia              | Descripción                                      |
| ------------------------ | ------------------------------------------------ |
| @babel/cli               | Para acceder a los comandos de Babel             |
| @babel/core              | Requerido para Babel                             |
| @babel/preset-env        | Hacer entendible JavaScript para los navegadores |
| @babel/preset-react      | Para ReactJS                                     |
| @babel/preset-typescript | Para TypeScript                                  |
| @types/react             | TypeScript                                       |
| @types/react-dom         | TypeScript                                       |
| @types/react-router-dom  | TypeScript                                       |
| @types/styled-components | TypeScript                                       |
| babel-loader             | Para que WebPack use Babel                       |
| clean-webpack-plugin     | (Pendiente)                                      |
| html-webpack-plugin      | (Pendiente)                                      |
| source-map-loader        | Para encontrar los archivos                      |
| typescript               | TypeScript                                       |
| webpack                  | (Pendiente)                                      |
| webpack-cli              | (Pendiente)                                      |
| webpack-dev-server       | (Pendiente)                                      |

**Instalación:** `npm i -D @babel/cli @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript @types/react @types/react-dom babel-loader clean-webpack-plugin html-webpack-plugin webpack webpack-cli webpack-dev-server @types/react-router-dom @types/styled-components typescript source-map-loader`

## Scripts

- `"dev": "webpack-dev-server --watch --mode development"`
- `"build": "webpack -p"`

---
