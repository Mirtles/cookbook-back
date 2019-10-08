const { Router } = require("express")
const { toJWT } = require("./jwt")
const bcrypt = require("bcryptjs")

const User = require("../user/model")

const router = new Router()

router.post("/login", async (req, res, next) => {
  const { name, password } = req.body

  if (!name || !password) {
    return res.send({ message: "please send valid name and password" })
  }

  const user = await User.findOne({
    where: { name: req.body.name }
  })

  if (!user) { return res.send({ message: "user not found" }) }

  if (bcrypt.compareSync(req.body.password, user.password)) {
    return res.send({
      jwt: toJWT({ userId: user.id }),
      user
    })
  }

  return res.send({ message: "incorrect password" })
})

module.exports = router