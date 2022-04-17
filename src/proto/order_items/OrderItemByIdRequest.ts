// Original file: src/orders-items/proto/order-item.proto

import type { Long } from '@grpc/proto-loader';

export interface OrderItemByIdRequest {
  'id'?: (number | string | Long);
}

export interface OrderItemByIdRequest__Output {
  'id': (string);
}
