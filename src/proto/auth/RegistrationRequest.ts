// Original file: src/auth/proto/auth.proto


export interface RegistrationRequest {
  'email'?: (string);
  'password'?: (string);
  'status'?: (number);
  'message'?: (string);
}

export interface RegistrationRequest__Output {
  'email': (string);
  'password': (string);
  'status': (number);
  'message': (string);
}
