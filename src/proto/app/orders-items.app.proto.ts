import { Observable } from "rxjs";
import { CreateOrderItemRequest } from "../order_items/CreateOrderItemRequest";
import { FindAllOrderItemResponse } from "../order_items/FindAllOrderItemResponse";
import { OrderItemByIdRequest } from "../order_items/OrderItemByIdRequest";
import { OrderItemResponse } from "../order_items/OrderItemResponse";
import { UpdateOrderItemRequest } from "../order_items/UpdateOrderItemRequest";


export interface IOrderItemsService {

    FindAllByOrderId(request: OrderItemByIdRequest): Observable<OrderItemResponse>;

    FindOneByOrderItemId(request: OrderItemByIdRequest): Observable<FindAllOrderItemResponse>;

    Create(request: CreateOrderItemRequest): Observable<OrderItemResponse>;

    Delete(request: OrderItemByIdRequest): Observable<OrderItemResponse>;

    Update(request: UpdateOrderItemRequest): Observable<OrderItemResponse>;
}