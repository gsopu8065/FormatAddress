# FormatAddress

This module is Useful to validate any address. It is also handy to pop up all suggested addresses. It is really a small module to install and delegate the work of validate the address. The installation and usage is shown below.

#### Installation
```bash
npm install -g formataddress
```

#### Basic Use
```bash
var formatAddress = require("formataddress");
formatAddress("1016 N plum grove rd")
    .then(function(data){
      console.log(data);
    });
```

The above code will display all suggested addresses for "1016 N plum grove rd" as follows.

```bash
[ '1016 N Plum Grove Rd, Schaumburg, IL 60173, USA',
  '1016 N Plum Grove Rd, Palatine, IL 60067, USA',
  'N Plum Grove Rd, Ela Township, IL 60074, USA' ]
```
