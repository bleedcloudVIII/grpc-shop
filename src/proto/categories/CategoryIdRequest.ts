// Original file: src/category/proto/category.proto

import type { Long } from '@grpc/proto-loader';

export interface CategoryIdRequest {
  'categoryId'?: (number | string | Long);
}

export interface CategoryIdRequest__Output {
  'categoryId': (string);
}
