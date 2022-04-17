import { Observable } from "rxjs";
import { CreateProductRequest } from "../products/CreateProductRequest";
import { FindAllProductResponse } from "../products/FindAllProductResponse";
import { ProductIdRequest } from "../products/ProductIdRequest";
import { ProductResponse } from "../products/ProductResponse";
import { UpdateProductRequest } from "../products/UpdateProductRequest";


export interface IProductsService {

    FindOne(request: ProductIdRequest): Observable<ProductResponse>;

    FindAll(): Observable<FindAllProductResponse>;

    Create(request: CreateProductRequest): Observable<ProductResponse>;

    Delete(request: ProductIdRequest): Observable<ProductResponse>;

    Update(request: UpdateProductRequest): Observable<ProductResponse>;
}