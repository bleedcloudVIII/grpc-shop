import { Observable } from "rxjs";
import { CreateUsersRequest } from "../users/CreateUsersRequest";
import { FindAllUsersResponse } from "../users/FindAllUsersResponse";
import { UpdateUsersRequest } from "../users/UpdateUsersRequest";
import { UsersIdRequest } from "../users/UsersIdRequest";
import { UsersResponse } from "../users/UsersResponse";


export interface IUsersService {

    FindOne(request: UsersIdRequest): Observable<UsersResponse>;

    FindAll(): Observable<FindAllUsersResponse>;

    Create(request: CreateUsersRequest): Observable<UsersResponse>;

    Delete(request: UsersIdRequest): Observable<UsersResponse>;

    Update(request: UpdateUsersRequest): Observable<UsersResponse>;

}