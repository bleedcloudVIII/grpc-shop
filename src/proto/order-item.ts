import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { OrderItemsClient as _order_items_OrderItemsClient, OrderItemsDefinition as _order_items_OrderItemsDefinition } from './order_items/OrderItems';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Timestamp: MessageTypeDefinition
    }
  }
  order_items: {
    CreateOrderItemRequest: MessageTypeDefinition
    FindAllOrderItemResponse: MessageTypeDefinition
    OrderItemByIdRequest: MessageTypeDefinition
    OrderItemResponse: MessageTypeDefinition
    OrderItems: SubtypeConstructor<typeof grpc.Client, _order_items_OrderItemsClient> & { service: _order_items_OrderItemsDefinition }
    UpdateOrderItemRequest: MessageTypeDefinition
  }
}

