// Original file: src/orders/proto/order.proto

import type { Long } from '@grpc/proto-loader';

export interface OrderIdRequest {
  'id'?: (number | string | Long);
}

export interface OrderIdRequest__Output {
  'id': (string);
}
