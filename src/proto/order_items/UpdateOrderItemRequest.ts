// Original file: src/orders-items/proto/order-item.proto

import type { Long } from '@grpc/proto-loader';

export interface UpdateOrderItemRequest {
  'id'?: (number | string | Long);
  'orderId'?: (number | string | Long);
  'productId'?: (number | string | Long);
  'productCount'?: (number | string | Long);
  'productPrice'?: (number | string | Long);
}

export interface UpdateOrderItemRequest__Output {
  'id': (string);
  'orderId': (string);
  'productId': (string);
  'productCount': (string);
  'productPrice': (string);
}
