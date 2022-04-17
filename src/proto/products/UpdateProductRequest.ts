// Original file: src/products/proto/product.proto

import type { Long } from '@grpc/proto-loader';

export interface UpdateProductRequest {
  'id'?: (number | string | Long);
  'name'?: (string);
  'cost'?: (number | string | Long);
  'category'?: (string);
}

export interface UpdateProductRequest__Output {
  'id': (string);
  'name': (string);
  'cost': (string);
  'category': (string);
}
