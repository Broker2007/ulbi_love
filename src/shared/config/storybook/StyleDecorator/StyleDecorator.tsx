import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import '../../../../app/styles/index.scss';

export const StyleDecorator = (theme:Theme) => (StoryComponent:Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
