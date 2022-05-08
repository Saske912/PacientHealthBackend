import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PacientServiceBase } from "./base/pacient.service.base";

@Injectable()
export class PacientService extends PacientServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
