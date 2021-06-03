import {Story, Meta} from '@storybook/react/types-6-0';
import Button, {ButtonProps} from '.';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Button',
  type: 'secondary',
  disable: false
}

export const Sizes = () => {
  return (
    <>
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        marginBottom: '10px'
      }}>
        <Button size='large'>Large</Button>
      </div>
    </>
  );
};
