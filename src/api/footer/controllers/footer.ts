/**
 * footer controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::footer.footer', ({ strapi }) => ({
    async find(ctx) {
      const entity = await strapi.entityService.findMany('api::footer.footer', {
        populate: {
          footer: {
            on: {
              'footer.headquarter': {
                populate: '*',
              },
              'footer.contact': {
                populate: '*',
              },
              'footer.social-links': {
                populate: {
                  social_network: '*',
                },
              },
              'group-companies.group-companies': {
                populate: {
                  data: {
                    populate: {
                      companies: '*', // if companies also have nested data
                    },
                  },
                },
              },
            },
          },
        } as any
      });
  
      const sanitized = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitized);
    },
  }));