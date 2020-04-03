class UserError extends Error{
  constructor (msg, status) {
    super(msg);
    this._status = status;
  }

  get status () {
    return this._status;
  }

}

class ChatError extends Error{
  constructor(msg, status) {
    super(msg);
    this._status = status
  }
  get status () {
    return this._status;
  }
}

class BadRequestError extends UserError{
  constructor (msg) {
    super(msg || 'Bad request', 400);
  }
}

class NotFoundError extends UserError{
  constructor (msg) {
    super(msg || 'Resource not found', 404);
  }
}

module.exports = {
  UserError,
  BadRequestError,
  NotFoundError,
};
