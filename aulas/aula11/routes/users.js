var express = require("express");
const { gerarToken, verificarToken } = require("../middlewares/auth");
const router = express.Router();
const Usuario = require("../models/userModel")


router.post("/", async (req, res) => {
  const {username, password} = req.body;
  const novoUsuario = await Usuario.create({username, password});
  res.status(201).json(novoUsuario)
})

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

router.post('/renovar', verificarToken, function (req,res){
  try{
    const payload = {
      iss: req.payload.iss,
      email: req.payload.email,
      nome: req.payload.nome,
      perfil: req.payload.perfil,
    }
    return res.json({ token: gerarToken(payload)});
  }catch(err){
    return res.status(401).json({msg: err.message});
  }
});

module.exports = router;
