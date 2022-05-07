// Original file: src/category/proto/category.proto

import type { Long } from '@grpc/proto-loader';

export interface CategoryIdRequest {
  'id'?: (number | string | Long);
}

export interface CategoryIdRequest__Output {
  'id': (string);
}
