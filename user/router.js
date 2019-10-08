const { Router } = require('express')
const bcrypt = require("bcryptjs")

const User = require("./model")

const router = new Router()

router.post("/user", async (req, res, next) => {
  const { name, password } = req.body

  if (!name || !password) {
    return res.send("missing info")
  }

  const user = {
    name,
    password: bcrypt.hashSync(password)
  }

  try {
    const newUser = await User.create(user)
    return res.send(newUser)
  } catch (error) { return res.status(400).send({ message: "something went wrong" }) }
})

module.exports = router;