// Original file: src/category/proto/category.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';
import type { Long } from '@grpc/proto-loader';

export interface CategoryResponse {
  'categoryId'?: (number | string | Long);
  'name'?: (string);
  'status'?: (number);
  'createdAt'?: (_google_protobuf_Timestamp | null);
  'updatedAt'?: (_google_protobuf_Timestamp | null);
}

export interface CategoryResponse__Output {
  'categoryId': (string);
  'name': (string);
  'status': (number);
  'createdAt': (_google_protobuf_Timestamp__Output | null);
  'updatedAt': (_google_protobuf_Timestamp__Output | null);
}
