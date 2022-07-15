export const AppError = (statusCode = 500, message: string | Error): Error => {
  throw {
    statusCode,
    message
  }
}
