# tryor.js
Give it a function and a default value. `tryor` will give you back the return value of
the function or, in case the function threw an exception, the default value.
Works in node and browsers.



## Usage
```javascript
    var config = tryor(function() {
        return JSON.parse(String(fs.readFileSync("config.json")));
    }, {});

    // instead of
    var config = {};
    try {
        config = JSON.parse(String(fs.readFileSync("config.json")));
    } catch (e) {
    }
```

Works extra well with ES6-style `const` variables.



## Installation

### Node
Install using npm

    npm install tryor

```javascript
var tryor = require("tryor");
```

### Browser
Clone the repo and include it in a script tag

    git clone https://github.com/olov/tryor.git

```html
<script src="tryor/tryor.js"></script>
```
