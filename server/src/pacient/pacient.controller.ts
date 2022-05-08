import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PacientService } from "./pacient.service";
import { PacientControllerBase } from "./base/pacient.controller.base";

@swagger.ApiTags("pacients")
@common.Controller("pacients")
export class PacientController extends PacientControllerBase {
  constructor(
    protected readonly service: PacientService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
