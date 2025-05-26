/**
 * business-post controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::business-post.business-post' ,  ({ strapi }) => ({
    async find(ctx) {
      const entries = await strapi.entityService.findMany('api::business-post.business-post', {
        ...ctx.query,
        populate: {
          data: {
            populate: '*', 
          },
          
        },
      });
  
      return { data: entries };
    }
  }));
  
