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
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DestinationService } from "../destination.service";
import { DestinationCreateInput } from "./DestinationCreateInput";
import { DestinationWhereInput } from "./DestinationWhereInput";
import { DestinationWhereUniqueInput } from "./DestinationWhereUniqueInput";
import { DestinationFindManyArgs } from "./DestinationFindManyArgs";
import { DestinationUpdateInput } from "./DestinationUpdateInput";
import { Destination } from "./Destination";
import { DrugFindManyArgs } from "../../drug/base/DrugFindManyArgs";
import { Drug } from "../../drug/base/Drug";
import { DrugWhereUniqueInput } from "../../drug/base/DrugWhereUniqueInput";
@swagger.ApiBearerAuth()
export class DestinationControllerBase {
  constructor(
    protected readonly service: DestinationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "Destination",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Destination })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: DestinationCreateInput
  ): Promise<Destination> {
    return await this.service.create({
      data: {
        ...data,

        doctor: data.doctor
          ? {
              connect: data.doctor,
            }
          : undefined,

        pacient: data.pacient
          ? {
              connect: data.pacient,
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

        pacient: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "Destination",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [Destination] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(DestinationFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Destination[]> {
    const args = plainToClass(DestinationFindManyArgs, request.query);
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

        pacient: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "Destination",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Destination })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: DestinationWhereUniqueInput
  ): Promise<Destination | null> {
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

        pacient: {
          select: {
            id: true,
          },
        },

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

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "Destination",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Destination })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: DestinationWhereUniqueInput,
    @common.Body() data: DestinationUpdateInput
  ): Promise<Destination | null> {
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

          pacient: data.pacient
            ? {
                connect: data.pacient,
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

          pacient: {
            select: {
              id: true,
            },
          },

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

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "Destination",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Destination })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: DestinationWhereUniqueInput
  ): Promise<Destination | null> {
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

          pacient: {
            select: {
              id: true,
            },
          },

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

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id/drugs")
  @nestAccessControl.UseRoles({
    resource: "Drug",
    action: "read",
    possession: "any",
  })
  @ApiNestedQuery(DrugFindManyArgs)
  async findManyDrugs(
    @common.Req() request: Request,
    @common.Param() params: DestinationWhereUniqueInput
  ): Promise<Drug[]> {
    const query = plainToClass(DrugFindManyArgs, request.query);
    const results = await this.service.findDrugs(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,

        destination: {
          select: {
            id: true,
          },
        },

        dosage: true,
        expire: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post("/:id/drugs")
  @nestAccessControl.UseRoles({
    resource: "Destination",
    action: "update",
    possession: "any",
  })
  async connectDrugs(
    @common.Param() params: DestinationWhereUniqueInput,
    @common.Body() body: DrugWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      drugs: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id/drugs")
  @nestAccessControl.UseRoles({
    resource: "Destination",
    action: "update",
    possession: "any",
  })
  async updateDrugs(
    @common.Param() params: DestinationWhereUniqueInput,
    @common.Body() body: DrugWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      drugs: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id/drugs")
  @nestAccessControl.UseRoles({
    resource: "Destination",
    action: "update",
    possession: "any",
  })
  async disconnectDrugs(
    @common.Param() params: DestinationWhereUniqueInput,
    @common.Body() body: DrugWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      drugs: {
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