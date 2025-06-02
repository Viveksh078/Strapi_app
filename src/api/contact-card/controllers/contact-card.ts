/**
 * contact-card controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::contact-card.contact-card' , ({ strapi }) => ({
    async find(ctx) {
      const entries = await strapi.entityService.findMany('api::contact-card.contact-card', {
        populate: {
            contact_card:  {
                on: {
                  'contact.contact': {
                    populate: {
                        contact_us:{
                            populate : '*'
                        }
                  },
                }}
        }
    }
      });
  
      return { data: entries };
    }
  }));
  

