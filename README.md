# JWT
JWT (Parse/Stringfy)

Make the string from JWT token received in a easy manipulable object:
```javascript
var tokenStr = "XXXXXXXXX.XXXXXXXXXXXXXXXX.XXXXXXXXX";
var token = JWT.parse(tokenStr);

/*
token = {
  header: { header claims },
  payload: { body claims (like, name, email...) },
  signature: ".. signature .."
}
*/
```

Transform in string a token you are holding in javascript:
```javascript

var tokenStr = JWT.stringfy(token);

/*
tokenStr = "XXXXXXXXX.XXXXXXXXXXXXXXXX.XXXXXXXXX"
*/
```

Access your claims like an JS object:
```javascript
console.log("Welcome, ", token.payload.email, "(", token.payload.email, ")");
```
