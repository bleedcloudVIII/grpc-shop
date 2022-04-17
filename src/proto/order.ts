import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { OrdersClient as _orders_OrdersClient, OrdersDefinition as _orders_OrdersDefinition } from './orders/Orders';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Empty: MessageTypeDefinition
      Timestamp: MessageTypeDefinition
    }
  }
  orders: {
    CreateOrderRequest: MessageTypeDefinition
    FindAllOrderResponse: MessageTypeDefinition
    OrderIdRequest: MessageTypeDefinition
    OrderResponse: MessageTypeDefinition
    Orders: SubtypeConstructor<typeof grpc.Client, _orders_OrdersClient> & { service: _orders_OrdersDefinition }
    UpdateOrderRequest: MessageTypeDefinition
  }
}

