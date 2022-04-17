import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AuthClient as _auth_AuthClient, AuthDefinition as _auth_AuthDefinition } from './auth/Auth';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  auth: {
    Auth: SubtypeConstructor<typeof grpc.Client, _auth_AuthClient> & { service: _auth_AuthDefinition }
    LoginRequest: MessageTypeDefinition
    LoginResponse: MessageTypeDefinition
    RegistrationRequest: MessageTypeDefinition
    RegistrationResponse: MessageTypeDefinition
  }
}

