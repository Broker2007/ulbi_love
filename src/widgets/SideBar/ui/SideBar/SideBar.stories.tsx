import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';

import SideBar from './SideBar';

export default {
    title: 'widget/SideBar',
    component: SideBar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = () => <SideBar />;

export const Light = Template.bind({});
Light.decorators = [StyleDecorator(Theme.LIGHT)];
export const Dark = Template.bind({});
Dark.decorators = [StyleDecorator(Theme.DARK)];
