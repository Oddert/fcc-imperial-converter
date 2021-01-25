# Imperial Unit Converter

A lightweight URL-based unit converter microservice for the FreeCodeCamp project.

## Live Demo
[https://deciduous-blossom-silk.glitch.me/](https://deciduous-blossom-silk.glitch.me/)

## Installation
```
$ git clone https://github.com/Oddert/fcc-imperial-converter.git
$ cd fcc-imperial-converter
$ npm i
```
### For development
```
$ npm run dev
```
### For a production build
```
$ npm start
```

## Scripts
| script | command                                        | action
|--------|------------------------------------------------|------------------------------------------------|
| start  | node app.js                                    | runs the server                                |
| server | nodemon app.js                                 | runs the server with auto restart              |

# Routes
| Route  | Method | Query | Returns
|--------|--------|------|----------|
| /  | GET |  | returns a basic html page to interact with the API |
| /api-convert | GET | input: any valid value followed by a unit supported bellow | JSON object with the unit conversions |
---

- Units are case insensitive and paried with a return value, e.g passing ` ?input=528 gal ` will return ` 1998.69742L `.

# Supported Units
- Gallon to Liter (GAL, L)
- Liter to Gallon (L, GAL)
- LBS to Killograms (LBS, KG)
- Killograms to LBS (KG, LBS)
- Miles to Killometers (MI, KM)
- Killometers to Miles (KM, MI)