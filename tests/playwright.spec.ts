import { test, expect } from '@playwright/test';

test('abre página inicial, abre galeria, clica em "Próximo" e verifica galeria visível', async ({ page }) => {
  // Navega para a página inicial (usa baseURL definido em playwright.config.js)
  await page.goto('/');

  // Abre a galeria clicando na primeira categoria
  await page.locator('.open-gallery').first().click();

  // Aguarda a galeria principal visível
  const gallery = page.locator('.gallery-card');
  await expect(gallery).toBeVisible();

  // Clica no botão "Próximo"
  await page.getByRole('button', { name: 'Próximo' }).click();

  // Verifica que a galeria principal continua visível após a navegação
  await expect(gallery).toBeVisible();
});