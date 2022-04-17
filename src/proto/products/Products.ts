// Original file: src/products/proto/product.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateProductRequest as _products_CreateProductRequest, CreateProductRequest__Output as _products_CreateProductRequest__Output } from '../products/CreateProductRequest';
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../google/protobuf/Empty';
import type { FindAllProductResponse as _products_FindAllProductResponse, FindAllProductResponse__Output as _products_FindAllProductResponse__Output } from '../products/FindAllProductResponse';
import type { ProductIdRequest as _products_ProductIdRequest, ProductIdRequest__Output as _products_ProductIdRequest__Output } from '../products/ProductIdRequest';
import type { ProductResponse as _products_ProductResponse, ProductResponse__Output as _products_ProductResponse__Output } from '../products/ProductResponse';
import type { UpdateProductRequest as _products_UpdateProductRequest, UpdateProductRequest__Output as _products_UpdateProductRequest__Output } from '../products/UpdateProductRequest';

export interface ProductsClient extends grpc.Client {
  Create(argument: _products_CreateProductRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_products_ProductResponse__Output>): grpc.ClientUnaryCall;
  Create(argument: _products_CreateProductRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_products_ProductResponse__Output>): grpc.ClientUnaryCall;
  Create(argument: _products_CreateProductRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_products_ProductResponse__Output>): grpc.ClientUnaryCall;
  Create(argument: _products_CreateProductRequest, callback: grpc.requestCallback<_products_ProductResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _products_CreateProductRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_products_ProductResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _products_CreateProductRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_products_ProductResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _products_CreateProductRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_products_ProductResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _products_CreateProductRequest, callback: grpc.requestCallback<_products_ProductResponse__Output>): grpc.ClientUnaryCall;
  
  Delete(argument: _products_ProductIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_products_ProductResponse__Output>): grpc.ClientUnaryCall;
  Delete(argument: _products_ProductIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_products_ProductResponse__Output>): grpc.ClientUnaryCall;
  Delete(argument: _products_ProductIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_products_ProductResponse__Output>): grpc.ClientUnaryCall;
  Delete(argument: _products_ProductIdRequest, callback: grpc.requestCallback<_products_ProductResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _products_ProductIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_products_ProductResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _products_ProductIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_products_ProductResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _products_ProductIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_products_ProductResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _products_ProductIdRequest, callback: grpc.requestCallback<_products_ProductResponse__Output>): grpc.ClientUnaryCall;
  
  FindAll(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_products_FindAllProductResponse__Output>): grpc.ClientUnaryCall;
  FindAll(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_products_FindAllProductResponse__Output>): grpc.ClientUnaryCall;
  FindAll(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_products_FindAllProductResponse__Output>): grpc.ClientUnaryCall;
  FindAll(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_products_FindAllProductResponse__Output>): grpc.ClientUnaryCall;
  findAll(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_products_FindAllProductResponse__Output>): grpc.ClientUnaryCall;
  findAll(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_products_FindAllProductResponse__Output>): grpc.ClientUnaryCall;
  findAll(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_products_FindAllProductResponse__Output>): grpc.ClientUnaryCall;
  findAll(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_products_FindAllProductResponse__Output>): grpc.ClientUnaryCall;
  
  FindOne(argument: _products_ProductIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_products_ProductResponse__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _products_ProductIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_products_ProductResponse__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _products_ProductIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_products_ProductResponse__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _products_ProductIdRequest, callback: grpc.requestCallback<_products_ProductResponse__Output>): grpc.ClientUnaryCall;
  findOne(argument: _products_ProductIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_products_ProductResponse__Output>): grpc.ClientUnaryCall;
  findOne(argument: _products_ProductIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_products_ProductResponse__Output>): grpc.ClientUnaryCall;
  findOne(argument: _products_ProductIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_products_ProductResponse__Output>): grpc.ClientUnaryCall;
  findOne(argument: _products_ProductIdRequest, callback: grpc.requestCallback<_products_ProductResponse__Output>): grpc.ClientUnaryCall;
  
  Update(argument: _products_UpdateProductRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_products_ProductResponse__Output>): grpc.ClientUnaryCall;
  Update(argument: _products_UpdateProductRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_products_ProductResponse__Output>): grpc.ClientUnaryCall;
  Update(argument: _products_UpdateProductRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_products_ProductResponse__Output>): grpc.ClientUnaryCall;
  Update(argument: _products_UpdateProductRequest, callback: grpc.requestCallback<_products_ProductResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _products_UpdateProductRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_products_ProductResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _products_UpdateProductRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_products_ProductResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _products_UpdateProductRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_products_ProductResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _products_UpdateProductRequest, callback: grpc.requestCallback<_products_ProductResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface ProductsHandlers extends grpc.UntypedServiceImplementation {
  Create: grpc.handleUnaryCall<_products_CreateProductRequest__Output, _products_ProductResponse>;
  
  Delete: grpc.handleUnaryCall<_products_ProductIdRequest__Output, _products_ProductResponse>;
  
  FindAll: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _products_FindAllProductResponse>;
  
  FindOne: grpc.handleUnaryCall<_products_ProductIdRequest__Output, _products_ProductResponse>;
  
  Update: grpc.handleUnaryCall<_products_UpdateProductRequest__Output, _products_ProductResponse>;
  
}

export interface ProductsDefinition extends grpc.ServiceDefinition {
  Create: MethodDefinition<_products_CreateProductRequest, _products_ProductResponse, _products_CreateProductRequest__Output, _products_ProductResponse__Output>
  Delete: MethodDefinition<_products_ProductIdRequest, _products_ProductResponse, _products_ProductIdRequest__Output, _products_ProductResponse__Output>
  FindAll: MethodDefinition<_google_protobuf_Empty, _products_FindAllProductResponse, _google_protobuf_Empty__Output, _products_FindAllProductResponse__Output>
  FindOne: MethodDefinition<_products_ProductIdRequest, _products_ProductResponse, _products_ProductIdRequest__Output, _products_ProductResponse__Output>
  Update: MethodDefinition<_products_UpdateProductRequest, _products_ProductResponse, _products_UpdateProductRequest__Output, _products_ProductResponse__Output>
}
