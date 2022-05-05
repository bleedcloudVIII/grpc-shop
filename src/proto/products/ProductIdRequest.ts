// Original file: src/products/proto/product.proto

import type { Long } from '@grpc/proto-loader';

export interface ProductIdRequest {
  'id'?: (number | string | Long);
}

export interface ProductIdRequest__Output {
  'id': (string);
}
