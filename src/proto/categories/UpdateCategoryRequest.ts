// Original file: src/category/proto/category.proto

import type { Long } from '@grpc/proto-loader';

export interface UpdateCategoryRequest {
  'categoryId'?: (number | string | Long);
  'newName'?: (string);
}

export interface UpdateCategoryRequest__Output {
  'categoryId': (string);
  'newName': (string);
}
