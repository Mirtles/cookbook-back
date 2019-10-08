const { toData } = require("./jwt");
const User = require("../user/model");

async function middleware(req, res, next) {
  const { authorization } = req.headers;
  const auth = authorization && authorization.split(" ");

  if (auth && auth[0] === "Bearer" && auth[1]) {
    try {
      const data = toData(auth[1])
      const user = await User.findByPk(data.userId)

      req.user = user

      if (!user) return next("User does not exist.")

      next()

    } catch (error) {
      res.status(400).send({
        message: `Error ${error.name}: ${error.message}`
      })
    }
  } else {
    res.status(401).send({
      message: "Please log in."
    })
  }
}

module.exports = middleware