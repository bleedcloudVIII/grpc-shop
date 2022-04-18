import { Observable } from "rxjs";
import { CategoryIdRequest } from "../categories/CategoryIdRequest";
import { CategoryResponse } from "../categories/CategoryResponse";
import { CreateCategory } from "../categories/CreateCategory";
import { DeleteCategory } from "../categories/DeleteCategory";
import { FindAllCategoryResponse } from "../categories/FindAllCategoryResponse";
import { UpdateCategoryRequest } from "../categories/UpdateCategoryRequest";


export interface ICategoryService {

    FindOne(request: CategoryIdRequest): Observable<CategoryResponse>;

    FindAll(): Observable<FindAllCategoryResponse>;

    Create(request: CreateCategory): Observable<CategoryResponse>;

    Delete(request: CategoryIdRequest): Observable<DeleteCategory>;

    Update(request: UpdateCategoryRequest): Observable<CategoryResponse>;
}