// Original file: src/products/proto/product.proto

import type { Long } from '@grpc/proto-loader';

export interface CreateProductRequest {
  'name'?: (string);
  'cost'?: (number | string | Long);
  'category'?: (string);
}

export interface CreateProductRequest__Output {
  'name': (string);
  'cost': (string);
  'category': (string);
}
