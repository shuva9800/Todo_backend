// controllers/userController.js
const User = require('../models/User');

exports.signup = async (req, res) => {
  console.log(req.body)
  try {
    const {email, password} =req.body;
    const currentUser = await User.create({ email: email, password: password });
   
    // let user = new User({ email, password });
    // await user.save();
    res.status(201).json({
      success: true,
       msg: 'User registered successfully' ,
       user: currentUser
      });
   
  } catch (err) {
    res.status(500).json({
      success:false,
      error:err.message,
      message:'server error'
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }
    res.status(200).json({ msg: 'Login successful', user: user });
  } catch (err) {
    res.status(500).send('Server error');
  }
};
