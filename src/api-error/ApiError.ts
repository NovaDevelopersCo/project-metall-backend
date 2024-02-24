export class ApiError extends Error {
  constructor(
    public status: number,
    public message: string
  ) {
    super(message);
  }

  static badRequest(message: string) {
    return new ApiError(400, message);
  }

  static unauthorizedError() {
    return new ApiError(401, 'You unauthorized');
  }
}
