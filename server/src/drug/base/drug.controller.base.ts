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
import { DrugService } from "../drug.service";
import { DrugCreateInput } from "./DrugCreateInput";
import { DrugWhereInput } from "./DrugWhereInput";
import { DrugWhereUniqueInput } from "./DrugWhereUniqueInput";
import { DrugFindManyArgs } from "./DrugFindManyArgs";
import { DrugUpdateInput } from "./DrugUpdateInput";
import { Drug } from "./Drug";
@swagger.ApiBearerAuth()
export class DrugControllerBase {
  constructor(
    protected readonly service: DrugService,
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
    resource: "Drug",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Drug })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: DrugCreateInput): Promise<Drug> {
    return await this.service.create({
      data: {
        ...data,

        destination: data.destination
          ? {
              connect: data.destination,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        description: true,

        destination: {
          select: {
            id: true,
          },
        },

        dosage: true,
        id: true,
        name: true,
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
    resource: "Drug",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [Drug] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(DrugFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Drug[]> {
    const args = plainToClass(DrugFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        description: true,

        destination: {
          select: {
            id: true,
          },
        },

        dosage: true,
        id: true,
        name: true,
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
    resource: "Drug",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Drug })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: DrugWhereUniqueInput
  ): Promise<Drug | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        description: true,

        destination: {
          select: {
            id: true,
          },
        },

        dosage: true,
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

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "Drug",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Drug })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: DrugWhereUniqueInput,
    @common.Body() data: DrugUpdateInput
  ): Promise<Drug | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          destination: data.destination
            ? {
                connect: data.destination,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          description: true,

          destination: {
            select: {
              id: true,
            },
          },

          dosage: true,
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

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "Drug",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Drug })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: DrugWhereUniqueInput
  ): Promise<Drug | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          description: true,

          destination: {
            select: {
              id: true,
            },
          },

          dosage: true,
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
}
