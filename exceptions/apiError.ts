class ApiError extends Error {
  constructor(
    public status: number,
    public message: string,
    public errors: any[] = []
  ) {
    super(message)
    this.status = status
    this.errors = errors
  }

  static UnauthorizedError() {
    return new ApiError(401, "Unauthorized")
  }

  static BadRequest(message: string, errors = []) {
    return new ApiError(400, message, errors)
  }
}

export default ApiError
