/**
 * footer controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::footer.footer', ({ strapi }) => ({
    async find(ctx) {
      const entity = await strapi.entityService.findMany('api::footer.footer', {
        populate: {
            footer: {
                populate: '*', // This populates all components in the dynamic zone
              },
        } as any
      });
  
      const sanitized = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitized);
    },
  }));