import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';

import Text, { TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title lorem ipsum',
    text: 'Text lorem ipsum',
};
export const Error = Template.bind({});
Error.args = {
    title: 'Title lorem ipsum',
    text: 'Text lorem ipsum',
    theme: TextTheme.ERROR,
};
export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title lorem ipsum',
};
export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Text lorem ipsum',
};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
    title: 'Title lorem ipsum',
    text: 'Text lorem ipsum',
};
PrimaryLight.decorators = [StyleDecorator(Theme.LIGHT)];
export const onlyTitleLight = Template.bind({});
onlyTitleLight.args = {
    title: 'Title lorem ipsum',
};
onlyTitleLight.decorators = [StyleDecorator(Theme.LIGHT)];
export const onlyTextLight = Template.bind({});
onlyTextLight.args = {
    text: 'Text lorem ipsum',
};
onlyTextLight.decorators = [StyleDecorator(Theme.LIGHT)];
