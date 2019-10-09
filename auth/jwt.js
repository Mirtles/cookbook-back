
const jwt = require("jsonwebtoken")

const secret =
  process.env.JWT_SECRET || "tECf(3G,5iU67JsAFH)cT4xiGFCSXVBXge5vR"

function toJWT(data) {
  return jwt.sign(data, secret, { expiresIn: "2h" })
}

function toData(token) {
  return jwt.verify(token, secret)
}

module.exports = { toJWT, toData }