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

export interface AboutUsBulletCard extends Struct.ComponentSchema {
  collectionName: 'components_about_us_bullet_cards';
  info: {
    displayName: 'bullet_card';
  };
  attributes: {
    bullet_values: Schema.Attribute.Component<'about-us.bullet-values', true>;
    heading: Schema.Attribute.String;
  };
}

export interface AboutUsBulletValues extends Struct.ComponentSchema {
  collectionName: 'components_about_us_bullet_values';
  info: {
    displayName: 'bullet_values';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface AboutUsBusiness extends Struct.ComponentSchema {
  collectionName: 'components_about_us_businesses';
  info: {
    displayName: 'business';
  };
  attributes: {
    business_values: Schema.Attribute.Component<
      'about-us.business-values',
      true
    >;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface AboutUsBusinessValues extends Struct.ComponentSchema {
  collectionName: 'components_about_us_business_values';
  info: {
    displayName: 'business_values';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface AboutUsCertificates extends Struct.ComponentSchema {
  collectionName: 'components_about_us_certificates';
  info: {
    displayName: 'certificates';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image_data: Schema.Attribute.Component<'about-us.image-data', true>;
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
    coorporate_section: Schema.Attribute.Component<
      'about-us.coorporate-section',
      true
    >;
  };
}

export interface AboutUsCoorporateSection extends Struct.ComponentSchema {
  collectionName: 'components_about_us_coorporate_sections';
  info: {
    displayName: 'coorporate_section';
  };
  attributes: {
    coorporate_list: Schema.Attribute.Component<
      'about-us.coorporate-list',
      true
    >;
    heading: Schema.Attribute.String;
  };
}

export interface AboutUsGlance extends Struct.ComponentSchema {
  collectionName: 'components_about_us_glances';
  info: {
    description: '';
    displayName: 'glance';
  };
  attributes: {
    business: Schema.Attribute.Component<'about-us.business', false>;
    certificates: Schema.Attribute.Component<'about-us.certificates', false>;
    heading: Schema.Attribute.String;
    headquarters: Schema.Attribute.Component<'about-us.headquarter', false>;
  };
}

export interface AboutUsHeadquarter extends Struct.ComponentSchema {
  collectionName: 'components_about_us_headquarters';
  info: {
    description: '';
    displayName: 'headquarter';
  };
  attributes: {
    bullet_card: Schema.Attribute.Component<'about-us.bullet-card', true>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    normal_card: Schema.Attribute.Component<'about-us.normal-card', true>;
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

export interface AboutUsImageData extends Struct.ComponentSchema {
  collectionName: 'components_about_us_image_data';
  info: {
    displayName: 'image_data';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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

export interface AboutUsNormalCard extends Struct.ComponentSchema {
  collectionName: 'components_about_us_normal_cards';
  info: {
    displayName: 'normal_card';
  };
  attributes: {
    heading: Schema.Attribute.String;
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
    description: '';
    displayName: 'contact';
  };
  attributes: {
    contact_us: Schema.Attribute.Component<'contact.contact-us-cards', true>;
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

export interface ContactContactUsCards extends Struct.ComponentSchema {
  collectionName: 'components_contact_contact_us_cards';
  info: {
    displayName: 'contact_us_cards';
  };
  attributes: {
    contact_card: Schema.Attribute.Component<'contact.contact-details', true>;
    title: Schema.Attribute.String;
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
    description: '';
    displayName: 'data';
  };
  attributes: {
    menu_name: Schema.Attribute.String;
    menu_url: Schema.Attribute.String;
    sub_menu: Schema.Attribute.Component<'sub-menu.sub-menu', true>;
  };
}

export interface FooterContact extends Struct.ComponentSchema {
  collectionName: 'components_footer_contacts';
  info: {
    description: '';
    displayName: 'contact';
  };
  attributes: {
    description: Schema.Attribute.Text;
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
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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
    description: '';
    displayName: 'social_links';
  };
  attributes: {
    social_network: Schema.Attribute.Component<'footer.social-network', true>;
  };
}

export interface FooterSocialNetwork extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_networks';
  info: {
    displayName: 'social_network';
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

export interface HomeCarouselAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_home_carousel_about_uses';
  info: {
    displayName: 'about_us';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    sub_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeCarouselClients extends Struct.ComponentSchema {
  collectionName: 'components_home_carousel_clients';
  info: {
    description: '';
    displayName: 'clients';
  };
  attributes: {
    clients_data: Schema.Attribute.Component<
      'home-carousel.clients-data',
      true
    >;
    heading: Schema.Attribute.String;
    heading_client: Schema.Attribute.String;
    sub_heading_client: Schema.Attribute.String;
  };
}

export interface HomeCarouselClientsData extends Struct.ComponentSchema {
  collectionName: 'components_home_carousel_clients_data';
  info: {
    displayName: 'clients_data';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    url: Schema.Attribute.String;
  };
}

export interface HomeCarouselSectorData extends Struct.ComponentSchema {
  collectionName: 'components_home_carousel_sector_data';
  info: {
    displayName: 'sector_data';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface HomeCarouselSectors extends Struct.ComponentSchema {
  collectionName: 'components_home_carousel_sectors';
  info: {
    description: '';
    displayName: 'sectors';
  };
  attributes: {
    heading: Schema.Attribute.String;
    heading_about: Schema.Attribute.String;
    sector_data: Schema.Attribute.Component<'home-carousel.sector-data', true>;
    sub_heading_about: Schema.Attribute.String;
  };
}

export interface HomeBanner extends Struct.ComponentSchema {
  collectionName: 'components_home_banners';
  info: {
    description: '';
    displayName: 'banner';
  };
  attributes: {
    button: Schema.Attribute.String;
    circle: Schema.Attribute.Component<'home.circle-tab', true>;
    description: Schema.Attribute.Text;
    header: Schema.Attribute.String;
    video: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeBusiness extends Struct.ComponentSchema {
  collectionName: 'components_home_businesses';
  info: {
    displayName: 'business';
  };
  attributes: {
    card: Schema.Attribute.Component<'home.card-tab', true>;
    heading: Schema.Attribute.String;
  };
}

export interface HomeCardTab extends Struct.ComponentSchema {
  collectionName: 'components_home_card_tabs';
  info: {
    displayName: 'card_tab';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    read_more_url: Schema.Attribute.Component<'home.read-url', false>;
    title: Schema.Attribute.String;
  };
}

export interface HomeCircleTab extends Struct.ComponentSchema {
  collectionName: 'components_home_circle_tabs';
  info: {
    displayName: 'circle_tab';
    icon: 'chartPie';
  };
  attributes: {
    data: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface HomeReadUrl extends Struct.ComponentSchema {
  collectionName: 'components_home_read_urls';
  info: {
    displayName: 'read_url';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface HomeSustainability extends Struct.ComponentSchema {
  collectionName: 'components_home_sustainabilities';
  info: {
    description: '';
    displayName: 'sustainability';
  };
  attributes: {
    description_left: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title_description: Schema.Attribute.Text;
    title_left: Schema.Attribute.String;
    title_right: Schema.Attribute.String;
  };
}

export interface OurBusinessBannerBusiness extends Struct.ComponentSchema {
  collectionName: 'components_our_business_banner_businesses';
  info: {
    displayName: 'banner_business';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface OurBusinessBusinessPost extends Struct.ComponentSchema {
  collectionName: 'components_our_business_business_posts';
  info: {
    description: '';
    displayName: 'banner';
  };
  attributes: {
    banner_business: Schema.Attribute.Component<
      'our-business.banner-business',
      true
    >;
  };
}

export interface OurBusinessCardComponent extends Struct.ComponentSchema {
  collectionName: 'components_our_business_card_components';
  info: {
    displayName: 'card_component';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    url: Schema.Attribute.String;
  };
}

export interface OurBusinessCertificate extends Struct.ComponentSchema {
  collectionName: 'components_our_business_certificates';
  info: {
    displayName: 'certificate';
  };
  attributes: {
    card_data: Schema.Attribute.Component<'our-business.card-component', true>;
    heading: Schema.Attribute.String;
  };
}

export interface OurBusinessPageGroup extends Struct.ComponentSchema {
  collectionName: 'components_our_business_page_groups';
  info: {
    displayName: 'page_group';
  };
  attributes: {
    banner: Schema.Attribute.Component<'our-business.business-post', false>;
    capabilities: Schema.Attribute.Component<'our-business.services', false>;
    certificate: Schema.Attribute.Component<'our-business.certificate', false>;
    projects: Schema.Attribute.Component<'our-business.service-card', false>;
  };
}

export interface OurBusinessProjectCard extends Struct.ComponentSchema {
  collectionName: 'components_our_business_project_cards';
  info: {
    displayName: 'project_card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface OurBusinessServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_our_business_service_cards';
  info: {
    description: '';
    displayName: 'projects';
  };
  attributes: {
    heading: Schema.Attribute.String;
    project_card: Schema.Attribute.Component<'our-business.project-card', true>;
  };
}

export interface OurBusinessServices extends Struct.ComponentSchema {
  collectionName: 'components_our_business_services';
  info: {
    description: '';
    displayName: 'capabilities';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
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
      'about-us.bullet-card': AboutUsBulletCard;
      'about-us.bullet-values': AboutUsBulletValues;
      'about-us.business': AboutUsBusiness;
      'about-us.business-values': AboutUsBusinessValues;
      'about-us.certificates': AboutUsCertificates;
      'about-us.coorporate-list': AboutUsCoorporateList;
      'about-us.coorporate-philosophy': AboutUsCoorporatePhilosophy;
      'about-us.coorporate-section': AboutUsCoorporateSection;
      'about-us.glance': AboutUsGlance;
      'about-us.headquarter': AboutUsHeadquarter;
      'about-us.history': AboutUsHistory;
      'about-us.image-data': AboutUsImageData;
      'about-us.message': AboutUsMessage;
      'about-us.normal-card': AboutUsNormalCard;
      'companies.companies': CompaniesCompanies;
      'contact.contact': ContactContact;
      'contact.contact-details': ContactContactDetails;
      'contact.contact-us': ContactContactUs;
      'contact.contact-us-cards': ContactContactUsCards;
      'data-business.data': DataBusinessData;
      'data-presence.data-presence': DataPresenceDataPresence;
      'data-project.data': DataProjectData;
      'data.data': DataData;
      'footer.contact': FooterContact;
      'footer.headquarter': FooterHeadquarter;
      'footer.social': FooterSocial;
      'footer.social-links': FooterSocialLinks;
      'footer.social-network': FooterSocialNetwork;
      'group-companies.group-companies': GroupCompaniesGroupCompanies;
      'home-carousel.about-us': HomeCarouselAboutUs;
      'home-carousel.clients': HomeCarouselClients;
      'home-carousel.clients-data': HomeCarouselClientsData;
      'home-carousel.sector-data': HomeCarouselSectorData;
      'home-carousel.sectors': HomeCarouselSectors;
      'home.banner': HomeBanner;
      'home.business': HomeBusiness;
      'home.card-tab': HomeCardTab;
      'home.circle-tab': HomeCircleTab;
      'home.read-url': HomeReadUrl;
      'home.sustainability': HomeSustainability;
      'our-business.banner-business': OurBusinessBannerBusiness;
      'our-business.business-post': OurBusinessBusinessPost;
      'our-business.card-component': OurBusinessCardComponent;
      'our-business.certificate': OurBusinessCertificate;
      'our-business.page-group': OurBusinessPageGroup;
      'our-business.project-card': OurBusinessProjectCard;
      'our-business.service-card': OurBusinessServiceCard;
      'our-business.services': OurBusinessServices;
      'sub-menu.sub-menu': SubMenuSubMenu;
    }
  }
}
