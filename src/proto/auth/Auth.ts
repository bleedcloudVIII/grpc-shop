// Original file: src/auth/proto/auth.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { LoginRequest as _auth_LoginRequest, LoginRequest__Output as _auth_LoginRequest__Output } from '../auth/LoginRequest';
import type { LoginResponse as _auth_LoginResponse, LoginResponse__Output as _auth_LoginResponse__Output } from '../auth/LoginResponse';
import type { RegistrationRequest as _auth_RegistrationRequest, RegistrationRequest__Output as _auth_RegistrationRequest__Output } from '../auth/RegistrationRequest';
import type { RegistrationResponse as _auth_RegistrationResponse, RegistrationResponse__Output as _auth_RegistrationResponse__Output } from '../auth/RegistrationResponse';

export interface AuthClient extends grpc.Client {
  Login(argument: _auth_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _auth_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _auth_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _auth_LoginRequest, callback: grpc.requestCallback<_auth_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _auth_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _auth_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _auth_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _auth_LoginRequest, callback: grpc.requestCallback<_auth_LoginResponse__Output>): grpc.ClientUnaryCall;
  
  Registration(argument: _auth_RegistrationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_RegistrationResponse__Output>): grpc.ClientUnaryCall;
  Registration(argument: _auth_RegistrationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_RegistrationResponse__Output>): grpc.ClientUnaryCall;
  Registration(argument: _auth_RegistrationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_RegistrationResponse__Output>): grpc.ClientUnaryCall;
  Registration(argument: _auth_RegistrationRequest, callback: grpc.requestCallback<_auth_RegistrationResponse__Output>): grpc.ClientUnaryCall;
  registration(argument: _auth_RegistrationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_RegistrationResponse__Output>): grpc.ClientUnaryCall;
  registration(argument: _auth_RegistrationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_RegistrationResponse__Output>): grpc.ClientUnaryCall;
  registration(argument: _auth_RegistrationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_RegistrationResponse__Output>): grpc.ClientUnaryCall;
  registration(argument: _auth_RegistrationRequest, callback: grpc.requestCallback<_auth_RegistrationResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AuthHandlers extends grpc.UntypedServiceImplementation {
  Login: grpc.handleUnaryCall<_auth_LoginRequest__Output, _auth_LoginResponse>;
  
  Registration: grpc.handleUnaryCall<_auth_RegistrationRequest__Output, _auth_RegistrationResponse>;
  
}

export interface AuthDefinition extends grpc.ServiceDefinition {
  Login: MethodDefinition<_auth_LoginRequest, _auth_LoginResponse, _auth_LoginRequest__Output, _auth_LoginResponse__Output>
  Registration: MethodDefinition<_auth_RegistrationRequest, _auth_RegistrationResponse, _auth_RegistrationRequest__Output, _auth_RegistrationResponse__Output>
}
