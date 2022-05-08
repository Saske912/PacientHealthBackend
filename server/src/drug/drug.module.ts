import { Module } from "@nestjs/common";
import { DrugModuleBase } from "./base/drug.module.base";
import { DrugService } from "./drug.service";
import { DrugController } from "./drug.controller";
import { DrugResolver } from "./drug.resolver";

@Module({
  imports: [DrugModuleBase],
  controllers: [DrugController],
  providers: [DrugService, DrugResolver],
  exports: [DrugService],
})
export class DrugModule {}
