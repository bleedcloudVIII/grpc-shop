// Original file: src/category/proto/category.proto

import type { Long } from '@grpc/proto-loader';

export interface UpdateCategoryRequest {
  'id'?: (number | string | Long);
  'name'?: (string);
}

export interface UpdateCategoryRequest__Output {
  'id': (string);
  'name': (string);
}
