const { createHmac } = require("node:crypto");

const hmac = createHmac("sha256", "ABC@#$%");

const encValue = hmac.update("Samrat Kasture").digest("hex");
console.log(encValue);
// Prints:
//   7fd04df92f636fd450bc841c9418e5825c17f33ad9c87c518115a45971f7f77e

// Here is an example to find the hash of a string with the sha-256 algorithm.

One of the most used hashing algorithms is SHA-256. Older common types, like SHA-1 and MD5, are no longer secure and should no longer be used.
var crypto = require("crypto");

var data = "This is a simple sentence  a hash by use of sha-256";
var hasheddata = crypto.createHash("sha256").update(data).digest("base64");

console.log(hasheddata);
