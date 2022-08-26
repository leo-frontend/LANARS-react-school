export class ServerError {
  constructor(public code: 200 | 404, public message: string) {
  }
}
