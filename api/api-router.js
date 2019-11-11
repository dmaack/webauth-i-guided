const router = require('express').Router();
const bcrypt = require('bcryptjs')

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

router.use('/auth', authRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
  res.json({ api: "It's alive" });
});

router.post('/hash', (req, res) => {
  // read a password from the body 
  // hash the password
  // restrn it to the user in an object 

  // const credentials = req.body;
  // const hash = bcrypt.hashSync(credentials.password, 14)
  // credentials.password = hash;

  // if(!credentials || !bycrypt.compareSync(credentials, credentials.password)) {
  //   return res.status(401).json({error: 'Incorrect Credentials'})
  // }

  let password = req.query.password;
  let hash = bcrypt.hashSync(password, 12)
  password = hash;

  res.send(hash)

})

module.exports = router;
