/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CreateDrugArgs } from "./CreateDrugArgs";
import { UpdateDrugArgs } from "./UpdateDrugArgs";
import { DeleteDrugArgs } from "./DeleteDrugArgs";
import { DrugFindManyArgs } from "./DrugFindManyArgs";
import { DrugFindUniqueArgs } from "./DrugFindUniqueArgs";
import { Drug } from "./Drug";
import { Destination } from "../../destination/base/Destination";
import { DrugService } from "../drug.service";

@graphql.Resolver(() => Drug)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DrugResolverBase {
  constructor(
    protected readonly service: DrugService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Drug",
    action: "read",
    possession: "any",
  })
  async _drugsMeta(
    @graphql.Args() args: DrugFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Drug])
  @nestAccessControl.UseRoles({
    resource: "Drug",
    action: "read",
    possession: "any",
  })
  async drugs(@graphql.Args() args: DrugFindManyArgs): Promise<Drug[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Drug, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Drug",
    action: "read",
    possession: "own",
  })
  async drug(@graphql.Args() args: DrugFindUniqueArgs): Promise<Drug | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Drug)
  @nestAccessControl.UseRoles({
    resource: "Drug",
    action: "create",
    possession: "any",
  })
  async createDrug(@graphql.Args() args: CreateDrugArgs): Promise<Drug> {
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        destination: args.data.destination
          ? {
              connect: args.data.destination,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Drug)
  @nestAccessControl.UseRoles({
    resource: "Drug",
    action: "update",
    possession: "any",
  })
  async updateDrug(
    @graphql.Args() args: UpdateDrugArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Drug | null> {
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          destination: args.data.destination
            ? {
                connect: args.data.destination,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Drug)
  @nestAccessControl.UseRoles({
    resource: "Drug",
    action: "delete",
    possession: "any",
  })
  async deleteDrug(@graphql.Args() args: DeleteDrugArgs): Promise<Drug | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Destination, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Destination",
    action: "read",
    possession: "any",
  })
  async destination(
    @graphql.Parent() parent: Drug
  ): Promise<Destination | null> {
    const result = await this.service.getDestination(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
