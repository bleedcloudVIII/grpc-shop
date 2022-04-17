// Original file: src/orders/proto/order.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';
import type { Long } from '@grpc/proto-loader';

export interface OrderResponse {
  'orderId'?: (number | string | Long);
  'userId'?: (number | string | Long);
  'price'?: (number | string | Long);
  'status'?: (number | string | Long);
  'createdAt'?: (_google_protobuf_Timestamp | null);
  'updatedAt'?: (_google_protobuf_Timestamp | null);
}

export interface OrderResponse__Output {
  'orderId': (string);
  'userId': (string);
  'price': (string);
  'status': (string);
  'createdAt': (_google_protobuf_Timestamp__Output | null);
  'updatedAt': (_google_protobuf_Timestamp__Output | null);
}
