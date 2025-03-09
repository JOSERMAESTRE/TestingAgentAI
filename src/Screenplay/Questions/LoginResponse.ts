export class LoginResponse {
    static IsSuccessfull(responseText: string | null): boolean {
        return responseText === null;
    }
}
