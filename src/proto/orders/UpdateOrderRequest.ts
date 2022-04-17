// Original file: src/orders/proto/order.proto

import type { Long } from '@grpc/proto-loader';

export interface UpdateOrderRequest {
  'orderId'?: (number | string | Long);
  'userId'?: (number | string | Long);
  'price'?: (number | string | Long);
}

export interface UpdateOrderRequest__Output {
  'orderId': (string);
  'userId': (string);
  'price': (string);
}
