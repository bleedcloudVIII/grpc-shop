import { NestFactory } from "@nestjs/core";
import { Transport } from "@nestjs/microservices";
import { CategoryModule } from "./category.module";


async function bootstrap() {
    const app = await NestFactory.createMicroservice(CategoryModule, {
        transport: Transport.GRPC,
        options: {
            url: '127.0.0.1:4001',
            protoPath: './proto/category.proto',
            package: 'categories'
        }
    });
    app.listen();
}

bootstrap();