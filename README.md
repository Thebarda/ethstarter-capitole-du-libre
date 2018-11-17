# Ethstarter | Capitole du libre

## Getting Started

Download this project with the following command:

```bash
git clone git@github.com:Thebarda/ethstarter-capitole-du-libre.git
```

or

```bash
git clone https://github.com/Thebarda/ethstarter-capitole-du-libre.git
```

Then:

```bash
cd ./ethstarter-capitole-du-libre
npm i
```

Then, to start up the local server, run

```bash
npm start
```

Open a browser and hit [http://localhost:3000](http://localhost:3000), and we are ready to roll.

## Build & Deployment

Building the dist version of the project is as easy as running

```bash
npm run build
```

If you want to deploy the slideshow to surge, run

```bash
npm run deploy
```

## Formatting and linting

```bash
npm run prettify
```

```bash
npm run lint
```

## Export as PDF

Run:

```bash
npm run start
```

Open another terminal then:

```bash
npm run export
```

The pdf result is located at ./exported/
