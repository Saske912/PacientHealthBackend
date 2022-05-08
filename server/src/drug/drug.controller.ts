import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DrugService } from "./drug.service";
import { DrugControllerBase } from "./base/drug.controller.base";

@swagger.ApiTags("drugs")
@common.Controller("drugs")
export class DrugController extends DrugControllerBase {
  constructor(
    protected readonly service: DrugService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
