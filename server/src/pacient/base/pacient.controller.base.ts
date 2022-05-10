/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PacientService } from "../pacient.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PacientCreateInput } from "./PacientCreateInput";
import { PacientWhereInput } from "./PacientWhereInput";
import { PacientWhereUniqueInput } from "./PacientWhereUniqueInput";
import { PacientFindManyArgs } from "./PacientFindManyArgs";
import { PacientUpdateInput } from "./PacientUpdateInput";
import { Pacient } from "./Pacient";
import { DestinationFindManyArgs } from "../../destination/base/DestinationFindManyArgs";
import { Destination } from "../../destination/base/Destination";
import { DestinationWhereUniqueInput } from "../../destination/base/DestinationWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PacientControllerBase {
  constructor(
    protected readonly service: PacientService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Pacient",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Pacient })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: PacientCreateInput): Promise<Pacient> {
    return await this.service.create({
      data: {
        ...data,

        doctor: data.doctor
          ? {
              connect: data.doctor,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        doctor: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Pacient",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Pacient] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(PacientFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Pacient[]> {
    const args = plainToClass(PacientFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,

        doctor: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Pacient",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Pacient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: PacientWhereUniqueInput
  ): Promise<Pacient | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,

        doctor: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Pacient",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Pacient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: PacientWhereUniqueInput,
    @common.Body() data: PacientUpdateInput
  ): Promise<Pacient | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          doctor: data.doctor
            ? {
                connect: data.doctor,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          doctor: {
            select: {
              id: true,
            },
          },

          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "Pacient",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Pacient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: PacientWhereUniqueInput
  ): Promise<Pacient | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,

          doctor: {
            select: {
              id: true,
            },
          },

          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Destination",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/destinations")
  @ApiNestedQuery(DestinationFindManyArgs)
  async findManyDestinations(
    @common.Req() request: Request,
    @common.Param() params: PacientWhereUniqueInput
  ): Promise<Destination[]> {
    const query = plainToClass(DestinationFindManyArgs, request.query);
    const results = await this.service.findDestinations(params.id, {
      ...query,
      select: {
        createdAt: true,

        doctor: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,

        pacient: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "Pacient",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/destinations")
  async connectDestinations(
    @common.Param() params: PacientWhereUniqueInput,
    @common.Body() body: DestinationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      destinations: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Pacient",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/destinations")
  async updateDestinations(
    @common.Param() params: PacientWhereUniqueInput,
    @common.Body() body: DestinationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      destinations: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Pacient",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/destinations")
  async disconnectDestinations(
    @common.Param() params: PacientWhereUniqueInput,
    @common.Body() body: DestinationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      destinations: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
