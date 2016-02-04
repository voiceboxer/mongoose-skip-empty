# mongoose-skip-empty

An easy way for your mongoose schema to skip string keys that are empty or have a null value.

# Install
```
npm install mongoose-skip-empty
```

# Usage

```
var skipEmpty = require('mongoose-skip-empty');

var hero = new Schema({
	name: { type: String, required: true },
	company: { type: String, set: skipEmpty }
});
```

# License

MIT
