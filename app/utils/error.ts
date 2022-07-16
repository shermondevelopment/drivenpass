export const AppError = (statusCode: number, message: string) => {
  throw {
    statusCode,
    message
  }
}
