var express = require("express");
const { gerarToken } = require("../middlewares/auth");
var router = express.Router();

/* GET users listing. */
router.post("/login", function (req, res, next) {
  const { username, password } = req.body;

  if (username === "jose@iesb.br" && password === "abcd1234") {
    const payload = {
      iss: "Minha Api",
      email: username,
      nome: "jose",
      perfil: "admin",
    };
    try {
      return res.json({ token: gerarToken(payload) });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }

  return res.status(401).json({ msg: "Credenciais invalidas" });
});

module.exports = router;
