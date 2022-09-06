export class ServerError {
  constructor(public code: 200 | 404 | 400, public message: string) {
  }
}
