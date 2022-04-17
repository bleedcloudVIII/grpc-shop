// Original file: src/users/proto/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateUsersRequest as _users_CreateUsersRequest, CreateUsersRequest__Output as _users_CreateUsersRequest__Output } from '../users/CreateUsersRequest';
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../google/protobuf/Empty';
import type { FindAllUsersResponse as _users_FindAllUsersResponse, FindAllUsersResponse__Output as _users_FindAllUsersResponse__Output } from '../users/FindAllUsersResponse';
import type { UpdateUsersRequest as _users_UpdateUsersRequest, UpdateUsersRequest__Output as _users_UpdateUsersRequest__Output } from '../users/UpdateUsersRequest';
import type { UsersIdRequest as _users_UsersIdRequest, UsersIdRequest__Output as _users_UsersIdRequest__Output } from '../users/UsersIdRequest';
import type { UsersResponse as _users_UsersResponse, UsersResponse__Output as _users_UsersResponse__Output } from '../users/UsersResponse';

export interface UsersClient extends grpc.Client {
  Create(argument: _users_CreateUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UsersResponse__Output>): grpc.ClientUnaryCall;
  Create(argument: _users_CreateUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_UsersResponse__Output>): grpc.ClientUnaryCall;
  Create(argument: _users_CreateUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UsersResponse__Output>): grpc.ClientUnaryCall;
  Create(argument: _users_CreateUsersRequest, callback: grpc.requestCallback<_users_UsersResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _users_CreateUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UsersResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _users_CreateUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_UsersResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _users_CreateUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UsersResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _users_CreateUsersRequest, callback: grpc.requestCallback<_users_UsersResponse__Output>): grpc.ClientUnaryCall;
  
  Delete(argument: _users_UsersIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UsersResponse__Output>): grpc.ClientUnaryCall;
  Delete(argument: _users_UsersIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_UsersResponse__Output>): grpc.ClientUnaryCall;
  Delete(argument: _users_UsersIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UsersResponse__Output>): grpc.ClientUnaryCall;
  Delete(argument: _users_UsersIdRequest, callback: grpc.requestCallback<_users_UsersResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _users_UsersIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UsersResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _users_UsersIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_UsersResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _users_UsersIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UsersResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _users_UsersIdRequest, callback: grpc.requestCallback<_users_UsersResponse__Output>): grpc.ClientUnaryCall;
  
  FindAll(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_FindAllUsersResponse__Output>): grpc.ClientUnaryCall;
  FindAll(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_FindAllUsersResponse__Output>): grpc.ClientUnaryCall;
  FindAll(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_users_FindAllUsersResponse__Output>): grpc.ClientUnaryCall;
  FindAll(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_users_FindAllUsersResponse__Output>): grpc.ClientUnaryCall;
  findAll(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_FindAllUsersResponse__Output>): grpc.ClientUnaryCall;
  findAll(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_FindAllUsersResponse__Output>): grpc.ClientUnaryCall;
  findAll(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_users_FindAllUsersResponse__Output>): grpc.ClientUnaryCall;
  findAll(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_users_FindAllUsersResponse__Output>): grpc.ClientUnaryCall;
  
  FindOne(argument: _users_UsersIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UsersResponse__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _users_UsersIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_UsersResponse__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _users_UsersIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UsersResponse__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _users_UsersIdRequest, callback: grpc.requestCallback<_users_UsersResponse__Output>): grpc.ClientUnaryCall;
  findOne(argument: _users_UsersIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UsersResponse__Output>): grpc.ClientUnaryCall;
  findOne(argument: _users_UsersIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_UsersResponse__Output>): grpc.ClientUnaryCall;
  findOne(argument: _users_UsersIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UsersResponse__Output>): grpc.ClientUnaryCall;
  findOne(argument: _users_UsersIdRequest, callback: grpc.requestCallback<_users_UsersResponse__Output>): grpc.ClientUnaryCall;
  
  Update(argument: _users_UpdateUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UsersResponse__Output>): grpc.ClientUnaryCall;
  Update(argument: _users_UpdateUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_UsersResponse__Output>): grpc.ClientUnaryCall;
  Update(argument: _users_UpdateUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UsersResponse__Output>): grpc.ClientUnaryCall;
  Update(argument: _users_UpdateUsersRequest, callback: grpc.requestCallback<_users_UsersResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _users_UpdateUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UsersResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _users_UpdateUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_UsersResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _users_UpdateUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UsersResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _users_UpdateUsersRequest, callback: grpc.requestCallback<_users_UsersResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface UsersHandlers extends grpc.UntypedServiceImplementation {
  Create: grpc.handleUnaryCall<_users_CreateUsersRequest__Output, _users_UsersResponse>;
  
  Delete: grpc.handleUnaryCall<_users_UsersIdRequest__Output, _users_UsersResponse>;
  
  FindAll: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _users_FindAllUsersResponse>;
  
  FindOne: grpc.handleUnaryCall<_users_UsersIdRequest__Output, _users_UsersResponse>;
  
  Update: grpc.handleUnaryCall<_users_UpdateUsersRequest__Output, _users_UsersResponse>;
  
}

export interface UsersDefinition extends grpc.ServiceDefinition {
  Create: MethodDefinition<_users_CreateUsersRequest, _users_UsersResponse, _users_CreateUsersRequest__Output, _users_UsersResponse__Output>
  Delete: MethodDefinition<_users_UsersIdRequest, _users_UsersResponse, _users_UsersIdRequest__Output, _users_UsersResponse__Output>
  FindAll: MethodDefinition<_google_protobuf_Empty, _users_FindAllUsersResponse, _google_protobuf_Empty__Output, _users_FindAllUsersResponse__Output>
  FindOne: MethodDefinition<_users_UsersIdRequest, _users_UsersResponse, _users_UsersIdRequest__Output, _users_UsersResponse__Output>
  Update: MethodDefinition<_users_UpdateUsersRequest, _users_UsersResponse, _users_UpdateUsersRequest__Output, _users_UsersResponse__Output>
}
