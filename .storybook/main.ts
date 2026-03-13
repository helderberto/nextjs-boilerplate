import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/stories.@(ts|tsx)'],
  framework: '@storybook/nextjs',
};

export default config;
