import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { DrugServiceBase } from "./base/drug.service.base";

@Injectable()
export class DrugService extends DrugServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
