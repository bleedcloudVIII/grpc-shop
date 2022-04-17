import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { ProductsClient as _products_ProductsClient, ProductsDefinition as _products_ProductsDefinition } from './products/Products';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Empty: MessageTypeDefinition
      Timestamp: MessageTypeDefinition
    }
  }
  products: {
    CreateProductRequest: MessageTypeDefinition
    FindAllProductResponse: MessageTypeDefinition
    ProductIdRequest: MessageTypeDefinition
    ProductResponse: MessageTypeDefinition
    Products: SubtypeConstructor<typeof grpc.Client, _products_ProductsClient> & { service: _products_ProductsDefinition }
    UpdateProductRequest: MessageTypeDefinition
  }
}

