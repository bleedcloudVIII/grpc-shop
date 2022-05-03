// Original file: src/products/proto/product.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';
import type { Long } from '@grpc/proto-loader';

export interface ProductResponse {
  'id'?: (number | string | Long);
  'name'?: (string);
  'cost'?: (number | string | Long);
  'category'?: (string);
  'createdAt'?: (_google_protobuf_Timestamp | null);
  'updatedAt'?: (_google_protobuf_Timestamp | null);
}

export interface ProductResponse__Output {
  'id': (string);
  'name': (string);
  'cost': (string);
  'category': (string);
  'createdAt': (_google_protobuf_Timestamp__Output | null);
  'updatedAt': (_google_protobuf_Timestamp__Output | null);
}
