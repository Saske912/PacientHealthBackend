import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DestinationService } from "./destination.service";
import { DestinationControllerBase } from "./base/destination.controller.base";

@swagger.ApiTags("destinations")
@common.Controller("destinations")
export class DestinationController extends DestinationControllerBase {
  constructor(
    protected readonly service: DestinationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
