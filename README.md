# API
[![ci](https://github.com/Sokkuri/API/workflows/CI/badge.svg)](https://github.com/Sokkuri/API/commits/master)
[![npm](https://img.shields.io/npm/v/@sokkuri/api.svg)](https://www.npmjs.com/package/@sokkuri/api)

Wrapper for the Sokkuri API.

## Setup & Build
Install all dependencies:
```
npm install
```

Build:
```
npm run build
```

## Usage
### Initial configuration:
```ts
import { ApiConfig } from "@sokkuri/api";

ApiConfig.init({
    // Required
    baseUrl: "/api/",
    onAuthenticate: () => { return Promise.resolve("access_token"); },

    // Optional
    onError: (statusCode: number) => { ... }
});
```

### Data Contexts

Import the context that you need and use it like this, for example:
```ts
import { AnimeDataContext } from "@sokkuri/api";

let context = new AnimeDataContext();
context.getAnime("ID").then(x => console.log(x));
```
