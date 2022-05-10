import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { SwaggerModule } from "@nestjs/swagger";
// @ts-ignore
// eslint-disable-next-line
import { AppModule } from "./app.module";
import {
  swaggerPath,
  swaggerDocumentOptions,
  swaggerSetupOptions,
  // @ts-ignore
  // eslint-disable-next-line
} from "./swagger";
import * as fs from "fs";

const { PORT = 3000 } = process.env;

async function main() {
  const httpsOptions = {
    key: fs.readFileSync(process.cwd() + '/keys/ssl/private.pem'),
    cert: fs.readFileSync(process.cwd() + '/keys/ssl/public.pem'),
    passphrase: 'pass',
  };
  const app = await NestFactory.create(AppModule, { cors: true, httpsOptions });

  app.setGlobalPrefix("api");
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    })
  );

  const document = SwaggerModule.createDocument(app, swaggerDocumentOptions);

  SwaggerModule.setup(swaggerPath, app, document, swaggerSetupOptions);

  void app.listen(PORT);

  return app;
}

module.exports = main();
