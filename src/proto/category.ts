import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { CategoryClient as _categories_CategoryClient, CategoryDefinition as _categories_CategoryDefinition } from './categories/Category';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  categories: {
    Category: SubtypeConstructor<typeof grpc.Client, _categories_CategoryClient> & { service: _categories_CategoryDefinition }
    CategoryIdRequest: MessageTypeDefinition
    CategoryResponse: MessageTypeDefinition
    CreateCategory: MessageTypeDefinition
    DeleteCategory: MessageTypeDefinition
    FindAllCategoryResponse: MessageTypeDefinition
    UpdateCategoryRequest: MessageTypeDefinition
  }
  google: {
    protobuf: {
      Empty: MessageTypeDefinition
      Timestamp: MessageTypeDefinition
    }
  }
}

