import React from 'react';
import Text from './text';

export default {
  title: 'Application/Layout/Text',
  component: Text,
  controls: {
    hideNoControlsWarning: true
  }
}

const Template = () => <Text />

export const Default = Template.bind({})
Default.parameters = {
  controls: {hideNoControlsWarning: true}
}