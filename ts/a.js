const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const passwordPlain = 'admin';
let passwordHash;

bcrypt.hash(passwordPlain, 10, (err, hash) => {
  if (err) {
    console.error('Erro ao gerar hash:', err);
    return;
  }
  passwordHash = hash;
  console.log('Hash gerado:', passwordHash);
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (username !== 'admin') {
    return res.status(401).json({ success: false, message: 'Usuário inválido' });
  }

  if (!passwordHash) {
    return res.status(500).json({ success: false, message: 'Hash não inicializado' });
  }

  const isMatch = await bcrypt.compare(password, passwordHash);

  if (isMatch) {
    res.json({ success: true, message: `${passwordHash} : Sucesso` });
  } else {
    res.status(401).json({ success: false, message: 'Senha incorreta' });
  }
});

module.exports = app;  
