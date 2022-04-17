// Original file: src/users/proto/user.proto

import type { Long } from '@grpc/proto-loader';

export interface UpdateUsersRequest {
  'id'?: (number | string | Long);
  'email'?: (string);
  'password'?: (number | string | Long);
}

export interface UpdateUsersRequest__Output {
  'id': (string);
  'email': (string);
  'password': (string);
}
