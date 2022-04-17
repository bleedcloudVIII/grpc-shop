// Original file: src/users/proto/user.proto

import type { Long } from '@grpc/proto-loader';

export interface UsersIdRequest {
  'id'?: (number | string | Long);
}

export interface UsersIdRequest__Output {
  'id': (string);
}
