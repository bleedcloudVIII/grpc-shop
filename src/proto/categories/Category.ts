// Original file: src/category/proto/category.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CategoryIdRequest as _categories_CategoryIdRequest, CategoryIdRequest__Output as _categories_CategoryIdRequest__Output } from '../categories/CategoryIdRequest';
import type { CategoryResponse as _categories_CategoryResponse, CategoryResponse__Output as _categories_CategoryResponse__Output } from '../categories/CategoryResponse';
import type { CreateCategory as _categories_CreateCategory, CreateCategory__Output as _categories_CreateCategory__Output } from '../categories/CreateCategory';
import type { DeleteCategory as _categories_DeleteCategory, DeleteCategory__Output as _categories_DeleteCategory__Output } from '../categories/DeleteCategory';
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../google/protobuf/Empty';
import type { FindAllCategoryResponse as _categories_FindAllCategoryResponse, FindAllCategoryResponse__Output as _categories_FindAllCategoryResponse__Output } from '../categories/FindAllCategoryResponse';
import type { UpdateCategoryRequest as _categories_UpdateCategoryRequest, UpdateCategoryRequest__Output as _categories_UpdateCategoryRequest__Output } from '../categories/UpdateCategoryRequest';

export interface CategoryClient extends grpc.Client {
  Create(argument: _categories_CreateCategory, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_categories_CategoryResponse__Output>): grpc.ClientUnaryCall;
  Create(argument: _categories_CreateCategory, metadata: grpc.Metadata, callback: grpc.requestCallback<_categories_CategoryResponse__Output>): grpc.ClientUnaryCall;
  Create(argument: _categories_CreateCategory, options: grpc.CallOptions, callback: grpc.requestCallback<_categories_CategoryResponse__Output>): grpc.ClientUnaryCall;
  Create(argument: _categories_CreateCategory, callback: grpc.requestCallback<_categories_CategoryResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _categories_CreateCategory, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_categories_CategoryResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _categories_CreateCategory, metadata: grpc.Metadata, callback: grpc.requestCallback<_categories_CategoryResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _categories_CreateCategory, options: grpc.CallOptions, callback: grpc.requestCallback<_categories_CategoryResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _categories_CreateCategory, callback: grpc.requestCallback<_categories_CategoryResponse__Output>): grpc.ClientUnaryCall;
  
  Delete(argument: _categories_CategoryIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_categories_DeleteCategory__Output>): grpc.ClientUnaryCall;
  Delete(argument: _categories_CategoryIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_categories_DeleteCategory__Output>): grpc.ClientUnaryCall;
  Delete(argument: _categories_CategoryIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_categories_DeleteCategory__Output>): grpc.ClientUnaryCall;
  Delete(argument: _categories_CategoryIdRequest, callback: grpc.requestCallback<_categories_DeleteCategory__Output>): grpc.ClientUnaryCall;
  delete(argument: _categories_CategoryIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_categories_DeleteCategory__Output>): grpc.ClientUnaryCall;
  delete(argument: _categories_CategoryIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_categories_DeleteCategory__Output>): grpc.ClientUnaryCall;
  delete(argument: _categories_CategoryIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_categories_DeleteCategory__Output>): grpc.ClientUnaryCall;
  delete(argument: _categories_CategoryIdRequest, callback: grpc.requestCallback<_categories_DeleteCategory__Output>): grpc.ClientUnaryCall;
  
  FindAll(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_categories_FindAllCategoryResponse__Output>): grpc.ClientUnaryCall;
  FindAll(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_categories_FindAllCategoryResponse__Output>): grpc.ClientUnaryCall;
  FindAll(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_categories_FindAllCategoryResponse__Output>): grpc.ClientUnaryCall;
  FindAll(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_categories_FindAllCategoryResponse__Output>): grpc.ClientUnaryCall;
  findAll(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_categories_FindAllCategoryResponse__Output>): grpc.ClientUnaryCall;
  findAll(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_categories_FindAllCategoryResponse__Output>): grpc.ClientUnaryCall;
  findAll(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_categories_FindAllCategoryResponse__Output>): grpc.ClientUnaryCall;
  findAll(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_categories_FindAllCategoryResponse__Output>): grpc.ClientUnaryCall;
  
  FindOne(argument: _categories_CategoryIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_categories_CategoryResponse__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _categories_CategoryIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_categories_CategoryResponse__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _categories_CategoryIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_categories_CategoryResponse__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _categories_CategoryIdRequest, callback: grpc.requestCallback<_categories_CategoryResponse__Output>): grpc.ClientUnaryCall;
  findOne(argument: _categories_CategoryIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_categories_CategoryResponse__Output>): grpc.ClientUnaryCall;
  findOne(argument: _categories_CategoryIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_categories_CategoryResponse__Output>): grpc.ClientUnaryCall;
  findOne(argument: _categories_CategoryIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_categories_CategoryResponse__Output>): grpc.ClientUnaryCall;
  findOne(argument: _categories_CategoryIdRequest, callback: grpc.requestCallback<_categories_CategoryResponse__Output>): grpc.ClientUnaryCall;
  
  Update(argument: _categories_UpdateCategoryRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_categories_CategoryResponse__Output>): grpc.ClientUnaryCall;
  Update(argument: _categories_UpdateCategoryRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_categories_CategoryResponse__Output>): grpc.ClientUnaryCall;
  Update(argument: _categories_UpdateCategoryRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_categories_CategoryResponse__Output>): grpc.ClientUnaryCall;
  Update(argument: _categories_UpdateCategoryRequest, callback: grpc.requestCallback<_categories_CategoryResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _categories_UpdateCategoryRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_categories_CategoryResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _categories_UpdateCategoryRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_categories_CategoryResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _categories_UpdateCategoryRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_categories_CategoryResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _categories_UpdateCategoryRequest, callback: grpc.requestCallback<_categories_CategoryResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface CategoryHandlers extends grpc.UntypedServiceImplementation {
  Create: grpc.handleUnaryCall<_categories_CreateCategory__Output, _categories_CategoryResponse>;
  
  Delete: grpc.handleUnaryCall<_categories_CategoryIdRequest__Output, _categories_DeleteCategory>;
  
  FindAll: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _categories_FindAllCategoryResponse>;
  
  FindOne: grpc.handleUnaryCall<_categories_CategoryIdRequest__Output, _categories_CategoryResponse>;
  
  Update: grpc.handleUnaryCall<_categories_UpdateCategoryRequest__Output, _categories_CategoryResponse>;
  
}

export interface CategoryDefinition extends grpc.ServiceDefinition {
  Create: MethodDefinition<_categories_CreateCategory, _categories_CategoryResponse, _categories_CreateCategory__Output, _categories_CategoryResponse__Output>
  Delete: MethodDefinition<_categories_CategoryIdRequest, _categories_DeleteCategory, _categories_CategoryIdRequest__Output, _categories_DeleteCategory__Output>
  FindAll: MethodDefinition<_google_protobuf_Empty, _categories_FindAllCategoryResponse, _google_protobuf_Empty__Output, _categories_FindAllCategoryResponse__Output>
  FindOne: MethodDefinition<_categories_CategoryIdRequest, _categories_CategoryResponse, _categories_CategoryIdRequest__Output, _categories_CategoryResponse__Output>
  Update: MethodDefinition<_categories_UpdateCategoryRequest, _categories_CategoryResponse, _categories_UpdateCategoryRequest__Output, _categories_CategoryResponse__Output>
}
