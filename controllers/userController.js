const ApiError = require("../error/ApiError");

class UserController {
  async registration(req, res) {}

  async login(req, res) {}

  async check(request, response, next) {
    const { id } = request.query;
    if (!id) {
      return next(ApiError.badRequest("An id of user not provided"));
    }
    response.json("sucess");
  }

  async delete() {}
}

module.exports = new UserController();
