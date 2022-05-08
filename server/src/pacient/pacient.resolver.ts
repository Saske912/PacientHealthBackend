import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PacientResolverBase } from "./base/pacient.resolver.base";
import { Pacient } from "./base/Pacient";
import { PacientService } from "./pacient.service";

@graphql.Resolver(() => Pacient)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PacientResolver extends PacientResolverBase {
  constructor(
    protected readonly service: PacientService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
