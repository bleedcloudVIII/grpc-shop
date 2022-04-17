// Original file: src/orders-items/proto/order-item.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';
import type { Long } from '@grpc/proto-loader';

export interface OrderItemResponse {
  'id'?: (number | string | Long);
  'orderId'?: (number | string | Long);
  'productId'?: (number | string | Long);
  'productCount'?: (number | string | Long);
  'productPrice'?: (number | string | Long);
  'status'?: (number);
  'createdAt'?: (_google_protobuf_Timestamp | null);
  'updatedAt'?: (_google_protobuf_Timestamp | null);
}

export interface OrderItemResponse__Output {
  'id': (string);
  'orderId': (string);
  'productId': (string);
  'productCount': (string);
  'productPrice': (string);
  'status': (number);
  'createdAt': (_google_protobuf_Timestamp__Output | null);
  'updatedAt': (_google_protobuf_Timestamp__Output | null);
}
