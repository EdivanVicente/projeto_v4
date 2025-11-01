import { defineConfig, devices } from '@playwright/test';

/**
 * Consulte https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests', // Onde seus testes estão
  timeout: 30 * 1000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  // 🚨 Esta seção inicia seu servidor web local
  webServer: {
    // Comando para iniciar o servidor (http-server que instalamos)
    command: 'npx http-server . -p 3000', 
    // URL que o Playwright deve verificar antes de rodar os testes
    url: 'http://localhost:3000', 
    // Reutiliza o servidor se ele já estiver rodando
    reuseExistingServer: !process.env.CI, 
  },

  use: {
    // 🚨 Define a URL base para que os testes possam usar caminhos curtos como '/'
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});