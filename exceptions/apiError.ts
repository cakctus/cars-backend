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

  static DoesNotExist(message: string, errors = []) {
    return new ApiError(404, message, errors)
  }

  static NumberAlreadyExists(message: string) {
    return new ApiError(400, message)
  }
}

export default ApiError
