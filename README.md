
# React-Native Application | Personal Finance

# Obervations
```
Se instalo expo para poder correr react-native en el browser, de esta manera es más fácil que lo puedan levantar y probar.
Se instalo la librería msw para simular la llamada a servicios.
La información se guarda en el sessinoStorage para mantenerla.
Para una correcta visualización, presione F12 o click derecho inspeccionar, luego click en Toggle device Toolbar
```

# Pre-requisites
**nodejs: 14.16.1**

# Set up
```
$ git clone https://github.com/MauroSuarez/squeleton-react-native.git
```

```
$ cd squeleton-react-native
```

```
$ npm install
```

| Plugin | Version |
| ------ | ------ |
| @react-native-community/masked-view" | "^0.1.11" |
| "@react-navigation/native" | "^5.9.4",
| "@react-navigation/stack" | "^5.14.4",
| "axios" | "^0.21.1",
| "expo" | "^32.0.6",
| "moment" | "^2.29.1",
| "react" | "^16.8.6",
| "react-datepicker" | "^3.8.0",
| "react-dom" | "^16.8.6",
| "react-native" | "^0.59.5",
| "react-native-gesture-handler" | "^1.10.3",
| "react-native-reanimated" | "^2.1.0",
| "react-native-safe-area-context" | "^3.2.0",
| "react-native-screens" | "^3.1.1",
| "react-native-web" | "^0.11.2",
| "react-navigation" | "2.9.1",
| "react-scripts" | "3.0.0",
| "styled-components" | "^5.2.3"


```
$ npm start
```

# Render
```
You look to web browser and `woala`!
http://localhost:3000/
```

# Project structure
+ **node_modules**
    * @Material-ui
    * ...Other
+ **src**
    * api
    * components
    * features
        * login
        * home
        * other-page
    * navigation
    * context
    * utils
    * mocks
    * constant
