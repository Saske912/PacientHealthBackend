import { Module } from "@nestjs/common";
import { PacientModuleBase } from "./base/pacient.module.base";
import { PacientService } from "./pacient.service";
import { PacientController } from "./pacient.controller";
import { PacientResolver } from "./pacient.resolver";

@Module({
  imports: [PacientModuleBase],
  controllers: [PacientController],
  providers: [PacientService, PacientResolver],
  exports: [PacientService],
})
export class PacientModule {}
