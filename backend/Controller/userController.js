import User from '../Model/userModel.js';

async function handleUserSignup(req,res){

  const {Namr,Email,Password} = req.body;

  await User.create({
    Name,
    Email,
    Password
  })

  return null

}

module.exports = {
  handleUserSignup
}