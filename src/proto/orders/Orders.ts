// Original file: src/orders/proto/order.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateOrderRequest as _orders_CreateOrderRequest, CreateOrderRequest__Output as _orders_CreateOrderRequest__Output } from '../orders/CreateOrderRequest';
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../google/protobuf/Empty';
import type { FindAllOrderResponse as _orders_FindAllOrderResponse, FindAllOrderResponse__Output as _orders_FindAllOrderResponse__Output } from '../orders/FindAllOrderResponse';
import type { OrderIdRequest as _orders_OrderIdRequest, OrderIdRequest__Output as _orders_OrderIdRequest__Output } from '../orders/OrderIdRequest';
import type { OrderResponse as _orders_OrderResponse, OrderResponse__Output as _orders_OrderResponse__Output } from '../orders/OrderResponse';
import type { UpdateOrderResquest as _orders_UpdateOrderResquest, UpdateOrderResquest__Output as _orders_UpdateOrderResquest__Output } from '../orders/UpdateOrderResquest';

export interface OrdersClient extends grpc.Client {
  Create(argument: _orders_CreateOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  Create(argument: _orders_CreateOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  Create(argument: _orders_CreateOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  Create(argument: _orders_CreateOrderRequest, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _orders_CreateOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _orders_CreateOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _orders_CreateOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _orders_CreateOrderRequest, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  
  Delete(argument: _orders_OrderIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  Delete(argument: _orders_OrderIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  Delete(argument: _orders_OrderIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  Delete(argument: _orders_OrderIdRequest, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _orders_OrderIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _orders_OrderIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _orders_OrderIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _orders_OrderIdRequest, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  
  FindAll(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_FindAllOrderResponse__Output>): grpc.ClientUnaryCall;
  FindAll(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_orders_FindAllOrderResponse__Output>): grpc.ClientUnaryCall;
  FindAll(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_FindAllOrderResponse__Output>): grpc.ClientUnaryCall;
  FindAll(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_orders_FindAllOrderResponse__Output>): grpc.ClientUnaryCall;
  findAll(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_FindAllOrderResponse__Output>): grpc.ClientUnaryCall;
  findAll(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_orders_FindAllOrderResponse__Output>): grpc.ClientUnaryCall;
  findAll(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_FindAllOrderResponse__Output>): grpc.ClientUnaryCall;
  findAll(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_orders_FindAllOrderResponse__Output>): grpc.ClientUnaryCall;
  
  FindOneByOrderId(argument: _orders_OrderIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  FindOneByOrderId(argument: _orders_OrderIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  FindOneByOrderId(argument: _orders_OrderIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  FindOneByOrderId(argument: _orders_OrderIdRequest, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  findOneByOrderId(argument: _orders_OrderIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  findOneByOrderId(argument: _orders_OrderIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  findOneByOrderId(argument: _orders_OrderIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  findOneByOrderId(argument: _orders_OrderIdRequest, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  
  FindOneByUserId(argument: _orders_OrderIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  FindOneByUserId(argument: _orders_OrderIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  FindOneByUserId(argument: _orders_OrderIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  FindOneByUserId(argument: _orders_OrderIdRequest, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  findOneByUserId(argument: _orders_OrderIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  findOneByUserId(argument: _orders_OrderIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  findOneByUserId(argument: _orders_OrderIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  findOneByUserId(argument: _orders_OrderIdRequest, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  
  Update(argument: _orders_UpdateOrderResquest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  Update(argument: _orders_UpdateOrderResquest, metadata: grpc.Metadata, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  Update(argument: _orders_UpdateOrderResquest, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  Update(argument: _orders_UpdateOrderResquest, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _orders_UpdateOrderResquest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _orders_UpdateOrderResquest, metadata: grpc.Metadata, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _orders_UpdateOrderResquest, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _orders_UpdateOrderResquest, callback: grpc.requestCallback<_orders_OrderResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface OrdersHandlers extends grpc.UntypedServiceImplementation {
  Create: grpc.handleUnaryCall<_orders_CreateOrderRequest__Output, _orders_OrderResponse>;
  
  Delete: grpc.handleUnaryCall<_orders_OrderIdRequest__Output, _orders_OrderResponse>;
  
  FindAll: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _orders_FindAllOrderResponse>;
  
  FindOneByOrderId: grpc.handleUnaryCall<_orders_OrderIdRequest__Output, _orders_OrderResponse>;
  
  FindOneByUserId: grpc.handleUnaryCall<_orders_OrderIdRequest__Output, _orders_OrderResponse>;
  
  Update: grpc.handleUnaryCall<_orders_UpdateOrderResquest__Output, _orders_OrderResponse>;
  
}

export interface OrdersDefinition extends grpc.ServiceDefinition {
  Create: MethodDefinition<_orders_CreateOrderRequest, _orders_OrderResponse, _orders_CreateOrderRequest__Output, _orders_OrderResponse__Output>
  Delete: MethodDefinition<_orders_OrderIdRequest, _orders_OrderResponse, _orders_OrderIdRequest__Output, _orders_OrderResponse__Output>
  FindAll: MethodDefinition<_google_protobuf_Empty, _orders_FindAllOrderResponse, _google_protobuf_Empty__Output, _orders_FindAllOrderResponse__Output>
  FindOneByOrderId: MethodDefinition<_orders_OrderIdRequest, _orders_OrderResponse, _orders_OrderIdRequest__Output, _orders_OrderResponse__Output>
  FindOneByUserId: MethodDefinition<_orders_OrderIdRequest, _orders_OrderResponse, _orders_OrderIdRequest__Output, _orders_OrderResponse__Output>
  Update: MethodDefinition<_orders_UpdateOrderResquest, _orders_OrderResponse, _orders_UpdateOrderResquest__Output, _orders_OrderResponse__Output>
}
