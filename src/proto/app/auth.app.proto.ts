import { Observable } from "rxjs";
import { LoginRequest } from "../auth/LoginRequest";
import { LoginResponse } from "../auth/LoginResponse";
import { RegistrationRequest } from "../auth/RegistrationRequest";
import { RegistrationResponse } from "../auth/RegistrationResponse";


export interface IAuthService{

    Login(request: LoginRequest): Observable<LoginResponse>;

    Registration(request: RegistrationRequest): Observable<RegistrationResponse>;
}