import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';

import Navbar from './Navbar';

export default {
    title: 'widget/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => <Navbar />;

export const Light = Template.bind({});
Light.decorators = [StyleDecorator(Theme.LIGHT), StoreDecorator({})];
export const Dark = Template.bind({});
Dark.decorators = [StyleDecorator(Theme.DARK), StoreDecorator({})];
export const AuthNavbar = Template.bind({});
AuthNavbar.decorators = [StyleDecorator(Theme.DARK), StoreDecorator({
    user: {
        authData: {},
    },
})];
