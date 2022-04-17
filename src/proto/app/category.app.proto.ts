import { Observable } from "rxjs";
import { CategoryIdRequest } from "../categories/CategoryIdRequest";
import { CategoryResponse } from "../categories/CategoryResponse";
import { FindAllCategoryResponse } from "../categories/FindAllCategoryResponse";
import { UpdateCategoryRequest } from "../categories/UpdateCategoryRequest";


export interface ICategoryService {

    FindOne(request: CategoryIdRequest): Observable<CategoryResponse>;

    FindAll(): Observable<FindAllCategoryResponse>;

    Create(request: CategoryIdRequest): Observable<CategoryResponse>;

    Delete(request: CategoryIdRequest): Observable<CategoryResponse>;

    Update(request: UpdateCategoryRequest): Observable<CategoryResponse>;
}