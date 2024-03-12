import type { Block } from 'payload/types';
import { invertBackground } from '../../fields/invertBackground';
import RowLabel from '../../components/RowLabel';

 

export const CarousalBlock: Block = {
  slug: 'carousalBlock', 
  fields: [
    invertBackground,
    {
      name: 'position',
      type: 'select',
      defaultValue: 'default',
      options: [
        {
          label: 'Default',
          value: 'default',
        },
        {
          label: 'Fullscreen',
          value: 'fullscreen',
        },
      ],
    },
    {
      name: 'slides',
      type: 'array',
      label: 'Image Slider',
      minRows: 2,
      maxRows: 10,
      interfaceName: 'CardSlider',
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
        },
      ],
     admin: {
  components: {
    RowLabel: RowLabel as React.FC, // Explicitly cast RowLabel to React.FC
  },
},

    },
  ],
};
 