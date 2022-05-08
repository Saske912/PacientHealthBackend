import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { DestinationServiceBase } from "./base/destination.service.base";

@Injectable()
export class DestinationService extends DestinationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
