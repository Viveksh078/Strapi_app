import type { Schema, Struct } from '@strapi/strapi';

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

export interface ProjectDataProjectData extends Struct.ComponentSchema {
  collectionName: 'components_project_data_project_data';
  info: {
    displayName: 'project_data';
  };
  attributes: {
    date: Schema.Attribute.Date;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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
      'data-business.data': DataBusinessData;
      'data.data': DataData;
      'project-data.project-data': ProjectDataProjectData;
      'sub-menu.sub-menu': SubMenuSubMenu;
    }
  }
}
