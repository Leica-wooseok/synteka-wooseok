import type { PlayFunctionContext } from 'storybook/internal/csf';
import { expect, within } from 'storybook/test';

export const playDefault = async ({ canvasElement }: PlayFunctionContext) => {
  const canvas = within(canvasElement);
  const heading = canvas.getByRole('heading', { name: 'Pages in Storybook' });
  await expect(heading).toBeInTheDocument();
};
