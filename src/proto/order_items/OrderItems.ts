// Original file: src/orders-items/proto/order-item.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateOrderItemRequest as _order_items_CreateOrderItemRequest, CreateOrderItemRequest__Output as _order_items_CreateOrderItemRequest__Output } from '../order_items/CreateOrderItemRequest';
import type { FindAllOrderItemResponse as _order_items_FindAllOrderItemResponse, FindAllOrderItemResponse__Output as _order_items_FindAllOrderItemResponse__Output } from '../order_items/FindAllOrderItemResponse';
import type { OrderItemByIdRequest as _order_items_OrderItemByIdRequest, OrderItemByIdRequest__Output as _order_items_OrderItemByIdRequest__Output } from '../order_items/OrderItemByIdRequest';
import type { OrderItemResponse as _order_items_OrderItemResponse, OrderItemResponse__Output as _order_items_OrderItemResponse__Output } from '../order_items/OrderItemResponse';
import type { UpdateOrderItemRequest as _order_items_UpdateOrderItemRequest, UpdateOrderItemRequest__Output as _order_items_UpdateOrderItemRequest__Output } from '../order_items/UpdateOrderItemRequest';

export interface OrderItemsClient extends grpc.Client {
  Create(argument: _order_items_CreateOrderItemRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_order_items_OrderItemResponse__Output>): grpc.ClientUnaryCall;
  Create(argument: _order_items_CreateOrderItemRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_order_items_OrderItemResponse__Output>): grpc.ClientUnaryCall;
  Create(argument: _order_items_CreateOrderItemRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_order_items_OrderItemResponse__Output>): grpc.ClientUnaryCall;
  Create(argument: _order_items_CreateOrderItemRequest, callback: grpc.requestCallback<_order_items_OrderItemResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _order_items_CreateOrderItemRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_order_items_OrderItemResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _order_items_CreateOrderItemRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_order_items_OrderItemResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _order_items_CreateOrderItemRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_order_items_OrderItemResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _order_items_CreateOrderItemRequest, callback: grpc.requestCallback<_order_items_OrderItemResponse__Output>): grpc.ClientUnaryCall;
  
  Delete(argument: _order_items_OrderItemByIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_order_items_OrderItemResponse__Output>): grpc.ClientUnaryCall;
  Delete(argument: _order_items_OrderItemByIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_order_items_OrderItemResponse__Output>): grpc.ClientUnaryCall;
  Delete(argument: _order_items_OrderItemByIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_order_items_OrderItemResponse__Output>): grpc.ClientUnaryCall;
  Delete(argument: _order_items_OrderItemByIdRequest, callback: grpc.requestCallback<_order_items_OrderItemResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _order_items_OrderItemByIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_order_items_OrderItemResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _order_items_OrderItemByIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_order_items_OrderItemResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _order_items_OrderItemByIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_order_items_OrderItemResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _order_items_OrderItemByIdRequest, callback: grpc.requestCallback<_order_items_OrderItemResponse__Output>): grpc.ClientUnaryCall;
  
  FindAllByOrderId(argument: _order_items_OrderItemByIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_order_items_OrderItemResponse__Output>): grpc.ClientUnaryCall;
  FindAllByOrderId(argument: _order_items_OrderItemByIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_order_items_OrderItemResponse__Output>): grpc.ClientUnaryCall;
  FindAllByOrderId(argument: _order_items_OrderItemByIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_order_items_OrderItemResponse__Output>): grpc.ClientUnaryCall;
  FindAllByOrderId(argument: _order_items_OrderItemByIdRequest, callback: grpc.requestCallback<_order_items_OrderItemResponse__Output>): grpc.ClientUnaryCall;
  findAllByOrderId(argument: _order_items_OrderItemByIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_order_items_OrderItemResponse__Output>): grpc.ClientUnaryCall;
  findAllByOrderId(argument: _order_items_OrderItemByIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_order_items_OrderItemResponse__Output>): grpc.ClientUnaryCall;
  findAllByOrderId(argument: _order_items_OrderItemByIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_order_items_OrderItemResponse__Output>): grpc.ClientUnaryCall;
  findAllByOrderId(argument: _order_items_OrderItemByIdRequest, callback: grpc.requestCallback<_order_items_OrderItemResponse__Output>): grpc.ClientUnaryCall;
  
  FindOneByOrderItemId(argument: _order_items_OrderItemByIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_order_items_FindAllOrderItemResponse__Output>): grpc.ClientUnaryCall;
  FindOneByOrderItemId(argument: _order_items_OrderItemByIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_order_items_FindAllOrderItemResponse__Output>): grpc.ClientUnaryCall;
  FindOneByOrderItemId(argument: _order_items_OrderItemByIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_order_items_FindAllOrderItemResponse__Output>): grpc.ClientUnaryCall;
  FindOneByOrderItemId(argument: _order_items_OrderItemByIdRequest, callback: grpc.requestCallback<_order_items_FindAllOrderItemResponse__Output>): grpc.ClientUnaryCall;
  findOneByOrderItemId(argument: _order_items_OrderItemByIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_order_items_FindAllOrderItemResponse__Output>): grpc.ClientUnaryCall;
  findOneByOrderItemId(argument: _order_items_OrderItemByIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_order_items_FindAllOrderItemResponse__Output>): grpc.ClientUnaryCall;
  findOneByOrderItemId(argument: _order_items_OrderItemByIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_order_items_FindAllOrderItemResponse__Output>): grpc.ClientUnaryCall;
  findOneByOrderItemId(argument: _order_items_OrderItemByIdRequest, callback: grpc.requestCallback<_order_items_FindAllOrderItemResponse__Output>): grpc.ClientUnaryCall;
  
  Update(argument: _order_items_UpdateOrderItemRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_order_items_OrderItemResponse__Output>): grpc.ClientUnaryCall;
  Update(argument: _order_items_UpdateOrderItemRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_order_items_OrderItemResponse__Output>): grpc.ClientUnaryCall;
  Update(argument: _order_items_UpdateOrderItemRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_order_items_OrderItemResponse__Output>): grpc.ClientUnaryCall;
  Update(argument: _order_items_UpdateOrderItemRequest, callback: grpc.requestCallback<_order_items_OrderItemResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _order_items_UpdateOrderItemRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_order_items_OrderItemResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _order_items_UpdateOrderItemRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_order_items_OrderItemResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _order_items_UpdateOrderItemRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_order_items_OrderItemResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _order_items_UpdateOrderItemRequest, callback: grpc.requestCallback<_order_items_OrderItemResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface OrderItemsHandlers extends grpc.UntypedServiceImplementation {
  Create: grpc.handleUnaryCall<_order_items_CreateOrderItemRequest__Output, _order_items_OrderItemResponse>;
  
  Delete: grpc.handleUnaryCall<_order_items_OrderItemByIdRequest__Output, _order_items_OrderItemResponse>;
  
  FindAllByOrderId: grpc.handleUnaryCall<_order_items_OrderItemByIdRequest__Output, _order_items_OrderItemResponse>;
  
  FindOneByOrderItemId: grpc.handleUnaryCall<_order_items_OrderItemByIdRequest__Output, _order_items_FindAllOrderItemResponse>;
  
  Update: grpc.handleUnaryCall<_order_items_UpdateOrderItemRequest__Output, _order_items_OrderItemResponse>;
  
}

export interface OrderItemsDefinition extends grpc.ServiceDefinition {
  Create: MethodDefinition<_order_items_CreateOrderItemRequest, _order_items_OrderItemResponse, _order_items_CreateOrderItemRequest__Output, _order_items_OrderItemResponse__Output>
  Delete: MethodDefinition<_order_items_OrderItemByIdRequest, _order_items_OrderItemResponse, _order_items_OrderItemByIdRequest__Output, _order_items_OrderItemResponse__Output>
  FindAllByOrderId: MethodDefinition<_order_items_OrderItemByIdRequest, _order_items_OrderItemResponse, _order_items_OrderItemByIdRequest__Output, _order_items_OrderItemResponse__Output>
  FindOneByOrderItemId: MethodDefinition<_order_items_OrderItemByIdRequest, _order_items_FindAllOrderItemResponse, _order_items_OrderItemByIdRequest__Output, _order_items_FindAllOrderItemResponse__Output>
  Update: MethodDefinition<_order_items_UpdateOrderItemRequest, _order_items_OrderItemResponse, _order_items_UpdateOrderItemRequest__Output, _order_items_OrderItemResponse__Output>
}
