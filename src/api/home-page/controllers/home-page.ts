/**
 * home-page controller
 */

import { factories } from '@strapi/strapi'
import homePage from '../routes/home-page';

export default factories.createCoreController('api::home-page.home-page' , ({ strapi }) => ({
    async find(ctx) {
      const entity = await strapi.entityService.findMany('api::home-page.home-page', {
        populate: {
          Home: {
            on: {
              'home.banner': {
                populate:{
                    circle: '*'
                },
              },
              'home.business': {
                populate: {
                    card:'*'
                },
              },
              'home.sustainability': {
                populate: '*'
              },
            },
          },
        } as any
      });
  
      const sanitized = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitized);
    },
  }));
