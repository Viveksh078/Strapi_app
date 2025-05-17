import type { Schema, Struct } from '@strapi/strapi';

export interface AboutUsAwards extends Struct.ComponentSchema {
  collectionName: 'components_about_us_awards';
  info: {
    description: '';
    displayName: 'awards';
    icon: 'star';
  };
  attributes: {
    awards: Schema.Attribute.Component<'about-us.awards-list', true>;
    heading: Schema.Attribute.String;
  };
}

export interface AboutUsAwardsList extends Struct.ComponentSchema {
  collectionName: 'components_about_us_awards_lists';
  info: {
    description: '';
    displayName: 'awards_list';
    icon: 'bulletList';
  };
  attributes: {
    client: Schema.Attribute.String;
    date: Schema.Attribute.Date;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    project: Schema.Attribute.String;
    title: Schema.Attribute.String;
    year: Schema.Attribute.String;
  };
}

export interface AboutUsCoorporateList extends Struct.ComponentSchema {
  collectionName: 'components_about_us_coorporate_lists';
  info: {
    description: '';
    displayName: 'coorporate_list';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface AboutUsCoorporatePhilosophy extends Struct.ComponentSchema {
  collectionName: 'components_about_us_coorporate_philosophies';
  info: {
    description: '';
    displayName: 'coorporate_philosophy';
  };
  attributes: {
    coorporate_list: Schema.Attribute.Component<
      'about-us.coorporate-list',
      true
    >;
    heading: Schema.Attribute.String;
  };
}

export interface AboutUsHistory extends Struct.ComponentSchema {
  collectionName: 'components_about_us_histories';
  info: {
    displayName: 'history';
    icon: 'bold';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AboutUsMessage extends Struct.ComponentSchema {
  collectionName: 'components_about_us_messages';
  info: {
    displayName: 'message';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    images: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    sub_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CompaniesCompanies extends Struct.ComponentSchema {
  collectionName: 'components_companies_companies';
  info: {
    description: '';
    displayName: 'companies';
  };
  attributes: {
    name: Schema.Attribute.Text;
  };
}

export interface ContactContact extends Struct.ComponentSchema {
  collectionName: 'components_contact_contacts';
  info: {
    displayName: 'contact';
  };
  attributes: {
    contact_details: Schema.Attribute.Component<
      'contact.contact-details',
      true
    >;
    heading: Schema.Attribute.String;
  };
}

export interface ContactContactDetails extends Struct.ComponentSchema {
  collectionName: 'components_contact_contact_details';
  info: {
    displayName: 'contact_details';
  };
  attributes: {
    address: Schema.Attribute.Text;
    company_name: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    phone_no: Schema.Attribute.BigInteger;
    title: Schema.Attribute.String;
  };
}

export interface ContactContactUs extends Struct.ComponentSchema {
  collectionName: 'components_contact_contact_uses';
  info: {
    description: '';
    displayName: 'inquiry';
  };
  attributes: {
    email: Schema.Attribute.Email;
    heading: Schema.Attribute.String;
    message: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    phone_no: Schema.Attribute.BigInteger;
    subject: Schema.Attribute.String;
  };
}

export interface DataBusinessData extends Struct.ComponentSchema {
  collectionName: 'components_data_business_data';
  info: {
    displayName: 'data';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    url: Schema.Attribute.String;
  };
}

export interface DataPresenceDataPresence extends Struct.ComponentSchema {
  collectionName: 'components_data_presence_data_presences';
  info: {
    displayName: 'data_presence';
  };
  attributes: {
    companies: Schema.Attribute.Component<'companies.companies', true>;
    region: Schema.Attribute.String;
  };
}

export interface DataProjectData extends Struct.ComponentSchema {
  collectionName: 'components_data_project_data';
  info: {
    displayName: 'data';
  };
  attributes: {
    date: Schema.Attribute.Date;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface DataData extends Struct.ComponentSchema {
  collectionName: 'components_data_data';
  info: {
    displayName: 'data';
  };
  attributes: {
    menu_name: Schema.Attribute.String;
    sub_menu: Schema.Attribute.Component<'sub-menu.sub-menu', true>;
  };
}

export interface FooterContact extends Struct.ComponentSchema {
  collectionName: 'components_footer_contacts';
  info: {
    displayName: 'contact';
  };
  attributes: {
    dresciption: Schema.Attribute.Text;
    email: Schema.Attribute.Email;
    heading: Schema.Attribute.String;
    mobile: Schema.Attribute.BigInteger;
    title: Schema.Attribute.String;
    title_email: Schema.Attribute.String;
  };
}

export interface FooterHeadquarter extends Struct.ComponentSchema {
  collectionName: 'components_footer_headquarters';
  info: {
    description: '';
    displayName: 'headquarter';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FooterSocial extends Struct.ComponentSchema {
  collectionName: 'components_footer_socials';
  info: {
    displayName: 'social';
  };
  attributes: {
    social_links: Schema.Attribute.Component<'footer.social-links', true>;
  };
}

export interface FooterSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_links';
  info: {
    displayName: 'social_links';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    url: Schema.Attribute.String;
  };
}

export interface GroupCompaniesGroupCompanies extends Struct.ComponentSchema {
  collectionName: 'components_group_companies_group_companies';
  info: {
    displayName: 'group_companies';
  };
  attributes: {
    data: Schema.Attribute.Component<'data-presence.data-presence', true>;
    heading: Schema.Attribute.String;
  };
}

export interface OurBusinessBusinessPost extends Struct.ComponentSchema {
  collectionName: 'components_our_business_business_posts';
  info: {
    displayName: 'business_post';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface OurBusinessServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_our_business_service_cards';
  info: {
    displayName: 'service_card';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface OurBusinessServices extends Struct.ComponentSchema {
  collectionName: 'components_our_business_services';
  info: {
    displayName: 'services';
    icon: 'bulletList';
  };
  attributes: {
    service_card: Schema.Attribute.Component<'our-business.service-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface SubMenuSubMenu extends Struct.ComponentSchema {
  collectionName: 'components_sub_menu_sub_menus';
  info: {
    displayName: 'sub_menu';
  };
  attributes: {
    sub_menu_link: Schema.Attribute.String;
    sub_menu_name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-us.awards': AboutUsAwards;
      'about-us.awards-list': AboutUsAwardsList;
      'about-us.coorporate-list': AboutUsCoorporateList;
      'about-us.coorporate-philosophy': AboutUsCoorporatePhilosophy;
      'about-us.history': AboutUsHistory;
      'about-us.message': AboutUsMessage;
      'companies.companies': CompaniesCompanies;
      'contact.contact': ContactContact;
      'contact.contact-details': ContactContactDetails;
      'contact.contact-us': ContactContactUs;
      'data-business.data': DataBusinessData;
      'data-presence.data-presence': DataPresenceDataPresence;
      'data-project.data': DataProjectData;
      'data.data': DataData;
      'footer.contact': FooterContact;
      'footer.headquarter': FooterHeadquarter;
      'footer.social': FooterSocial;
      'footer.social-links': FooterSocialLinks;
      'group-companies.group-companies': GroupCompaniesGroupCompanies;
      'our-business.business-post': OurBusinessBusinessPost;
      'our-business.service-card': OurBusinessServiceCard;
      'our-business.services': OurBusinessServices;
      'sub-menu.sub-menu': SubMenuSubMenu;
    }
  }
}
