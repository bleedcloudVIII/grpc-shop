// Original file: src/orders/proto/order.proto

import type { Long } from '@grpc/proto-loader';

export interface CreateOrderRequest {
  'userId'?: (number | string | Long);
  'price'?: (number | string | Long);
}

export interface CreateOrderRequest__Output {
  'userId': (string);
  'price': (string);
}
