import { Observable } from "rxjs";
import { CreateOrderRequest } from "../orders/CreateOrderRequest";
import { FindAllOrderResponse } from "../orders/FindAllOrderResponse";
import { OrderIdRequest } from "../orders/OrderIdRequest";
import { OrderResponse } from "../orders/OrderResponse";
import { UpdateOrderRequest } from "../orders/UpdateOrderRequest";


export interface IOrdersService {
    FindOneByOrderId(request: OrderIdRequest): Observable<OrderResponse>;

    FindOneByUserId(request: OrderIdRequest): Observable<OrderResponse>;

    FindAll(): Observable<FindAllOrderResponse>;

    Create(request: CreateOrderRequest): Observable<OrderResponse>;

    Update(request: UpdateOrderRequest): Observable<OrderResponse>;

    Delete(request: OrderIdRequest): Observable<OrderResponse>;
}