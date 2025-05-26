/**
 * about-us-page controller
 */

import { factories } from '@strapi/strapi'
import business from '../../business/controllers/business';
import { Certificate } from 'crypto';

export default factories.createCoreController('api::about-us-page.about-us-page' , ({ strapi }) => ({
    async find(ctx) {
      const entity = await strapi.entityService.findMany('api::about-us-page.about-us-page', {
        populate: {
        about_us_content : {
            on: {
              'about-us.glance': {
                populate: {
                    headquarters:{
                        populate: {
                            normal_card: '*',
                            bullet_card:{
                                populate:{
                                    bullet_values:'*'
                                }
                            },
                            image:'*'
                          },
                    },
                    business:{
                        populate: {
                            business_values: '*',
                             image:'*'
                          },
                         
                    },
                    certificates:{
                        populate: {
                            image_data: {
                                populate:{
                                    image:'*'
                                }
                            },
                            
                          },
                    }
                    
                  },
              },
              'about-us.coorporate-philosophy': {
                populate: {
                    coorporate_section:{
                        populate: {
                            coorporate_list :{
                                populate:{
                                    image:'*'
                                },
                            
                          },
                    },
                    
                }
              },
            },
          },
        } as any
    }});
  
      const sanitized = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitized);
    },
  }));

