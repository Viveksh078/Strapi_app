/**
 * home-carousel controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::home-carousel.home-carousel', ({ strapi }) => ({
    async find(ctx) {
      const entity = await strapi.entityService.findMany('api::home-carousel.home-carousel', {
        populate: {
          home_carousel: {
            on: {
              'home-carousel.about-us': {
                populate: {
                    image: true
                  },
              },
              'home-carousel.sectors': {
                populate: {
                    sector_data: {
                      populate: ['icon'], // This line is critical
                    },
                  },
              },
              'home-carousel.clients': {
                populate: {
                    clients_data: {
                        populate : ['image']
                    }
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
