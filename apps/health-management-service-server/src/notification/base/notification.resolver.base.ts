/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Notification } from "./Notification";
import { NotificationCountArgs } from "./NotificationCountArgs";
import { NotificationFindManyArgs } from "./NotificationFindManyArgs";
import { NotificationFindUniqueArgs } from "./NotificationFindUniqueArgs";
import { CreateNotificationArgs } from "./CreateNotificationArgs";
import { UpdateNotificationArgs } from "./UpdateNotificationArgs";
import { DeleteNotificationArgs } from "./DeleteNotificationArgs";
import { Patient } from "../../patient/base/Patient";
import { NotificationService } from "../notification.service";
@graphql.Resolver(() => Notification)
export class NotificationResolverBase {
  constructor(protected readonly service: NotificationService) {}

  async _notificationsMeta(
    @graphql.Args() args: NotificationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Notification])
  async notifications(
    @graphql.Args() args: NotificationFindManyArgs
  ): Promise<Notification[]> {
    return this.service.notifications(args);
  }

  @graphql.Query(() => Notification, { nullable: true })
  async notification(
    @graphql.Args() args: NotificationFindUniqueArgs
  ): Promise<Notification | null> {
    const result = await this.service.notification(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Notification)
  async createNotification(
    @graphql.Args() args: CreateNotificationArgs
  ): Promise<Notification> {
    return await this.service.createNotification({
      ...args,
      data: {
        ...args.data,

        patient: args.data.patient
          ? {
              connect: args.data.patient,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Notification)
  async updateNotification(
    @graphql.Args() args: UpdateNotificationArgs
  ): Promise<Notification | null> {
    try {
      return await this.service.updateNotification({
        ...args,
        data: {
          ...args.data,

          patient: args.data.patient
            ? {
                connect: args.data.patient,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Notification)
  async deleteNotification(
    @graphql.Args() args: DeleteNotificationArgs
  ): Promise<Notification | null> {
    try {
      return await this.service.deleteNotification(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Patient, {
    nullable: true,
    name: "patient",
  })
  async getPatient(
    @graphql.Parent() parent: Notification
  ): Promise<Patient | null> {
    const result = await this.service.getPatient(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
