// Original file: src/auth/proto/auth.proto


export interface LoginRequest {
  'email'?: (string);
  'password'?: (string);
  'status'?: (number);
  'message'?: (string);
}

export interface LoginRequest__Output {
  'email': (string);
  'password': (string);
  'status': (number);
  'message': (string);
}
