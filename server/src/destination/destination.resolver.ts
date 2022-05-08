import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { DestinationResolverBase } from "./base/destination.resolver.base";
import { Destination } from "./base/Destination";
import { DestinationService } from "./destination.service";

@graphql.Resolver(() => Destination)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DestinationResolver extends DestinationResolverBase {
  constructor(
    protected readonly service: DestinationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
