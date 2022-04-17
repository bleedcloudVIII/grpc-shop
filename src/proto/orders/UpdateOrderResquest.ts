// Original file: src/orders/proto/order.proto

import type { Long } from '@grpc/proto-loader';

export interface UpdateOrderResquest {
  'orderId'?: (number | string | Long);
  'userId'?: (number | string | Long);
  'price'?: (number | string | Long);
}

export interface UpdateOrderResquest__Output {
  'orderId': (string);
  'userId': (string);
  'price': (string);
}
