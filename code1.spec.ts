import { test, expect } from '@playwright/test';

test('codegen', async ({ page }) => {
  await page.goto('https://admin:7gc7d4saxzvYNJR6ex1WLe@origin-staging-2-www.usatoday.com/money/blueprint/wp-login.php');
  await page.getByLabel('Username or Email Address').click();
  await page.getByLabel('Username or Email Address').fill('pavithra');
  await page.getByLabel('Username or Email Address').press('ControlOrMeta+z');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('1CshbT85g[Ev');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('link', { name: 'Posts', exact: true }).click();
  await page.locator('#wpbody-content').getByRole('link', { name: 'Add New Post' }).click();
  await page.goto('https://origin-staging-2-www.usatoday.com/money/blueprint/wp-admin/post-new.php');
  await page.getByLabel('Add title').fill('automation qa');
  await page.getByLabel('Select template: Default').click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByLabel('Template', { exact: true }).selectOption('single-best-credit-card-minimal.blade.php');
  await page.goto('https://origin-staging-2-www.usatoday.com/money/blueprint/wp-admin/post.php?post=228680&action=edit');
  await page.goto('https://origin-staging-2-www.usatoday.com/money/blueprint/wp-admin/post.php?action=edit&post=228680');
  await page.getByRole('button', { name: 'Publish', exact: true }).click();
});