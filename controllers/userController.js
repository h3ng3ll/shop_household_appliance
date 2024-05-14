const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { User, Basket } = require("../models/models")

const uuid = require("uuid")


const generateJWT = (user_id, email, role, firstname, lastname, basket_id) => jwt.sign({
  user_id: user_id,
  email: email,
  role: role,
  firstname: firstname,
  lastname: lastname,
  basket_id: basket_id,
},
  process.env.JWT_PASS,
  { expiresIn: "24h" }
)

class UserController {
  async registration(req, res, next) {
    const { email, password, role, firstname, lastname } = req.body
    if (!email || !password) {
      return next(ApiError.badRequest("Invalid password or email "))
    }

    const candidate = await User.findOne({ where: { email: email } })
    if (candidate) {
      return next(ApiError.badRequest("User already exists"))
    }

    const hashPassword = await bcrypt.hash(password, 5)

    const user = await User.create({
      email,
      // role,
      firstname,
      lastname,
      password: hashPassword,
    })

    const basket = await Basket.create({
      userUserId: user.user_id
    })

    user.basketBasketId = basket.basket_id;

    await user.save();

    const token = generateJWT(
      user.user_id,
      user.email,
      user.role,
      user.firstname,
      user.lastname,
      user.basket_id,
    )

    return res.json(token)
  }

  async login(req, res, next) {
    const { email, password } = req.body

    const user = await User.findOne({ where: { email } })
    if (!user) {
      return next(ApiError.internal("User not found"))
    }

    let comparePassword = bcrypt.compareSync(String(password), user.password)

    if (!comparePassword) {
      return next(ApiError.internal("Password is uncorrect"))
    }

    const token = generateJWT(
      user.user_id,
      user.email,
      user.role,
      user.firstname,
      user.lastname,
      user.basketBasketId,
      user.birthday,
    )

    return res.json(token);

  }

  async auth(request, response, next) {

    const uid = request.user.user_id;
    const user = await User.findOne({ where: { user_id: uid } })

    const token = generateJWT(
      user.user_id,
      user.email,
      user.role,
      user.firstname,
      user.lastname,
      user.basketBasketId,
      user.birthday,
    )

    // const { id } = request.query;
    response.json(token)
  }

  async updateCredentials(req , res  , next){
    const {email , user_id , birthday ,  firstname , lastname} = req.body 

    if(!user_id){
      return next(ApiError.badRequest("user_id  must not be null"))
    }
    const user = await User.findOne({where: {user_id}})
    
    if(firstname){
      await user.update({firstname})
    } 
    if(lastname){
      await user.update({lastname})
    } 
    if(email){
      await user.update({email})
    } 
    if(birthday){
      await user.update({birthday})
    }
    await user.save();
    
    const jwt = generateJWT(
      user.user_id,
      user.email,
      user.role,
      user.firstname,
      user.lastname,
      user.basket_id,
      user.birthday,
    )
    return res.json(jwt);
  }
  async delete() { }
}

module.exports = new UserController();
