// Original file: src/users/proto/user.proto

import type { Long } from '@grpc/proto-loader';

export interface CreateUsersRequest {
  'email'?: (string);
  'password'?: (number | string | Long);
}

export interface CreateUsersRequest__Output {
  'email': (string);
  'password': (string);
}
