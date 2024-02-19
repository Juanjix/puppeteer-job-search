const { test, expect } = require("@playwright/test");

test("Empieza con Juan Jose Peralta", async ({ page }) => {
  await page.goto("https://juanso.dev");

  // Expect a title to contain a substring
  await expect(page).toHaveTitle(/Juan José Peralta/);
});

// Test para saber si tiene un boton "Let's talk"
test("Let's talk button", async ({ page }) => {
  await page.goto("https://juanso.dev");

  // Click the let's talk link.
  await page.getByRole("link", { name: "Let's Talk" }).click();

  // Expect page with the heading Juan Jose Peralta
  await expect(
    page.getByRole("heading", { name: "Juan Jose Peralta" })
  ).toBeVisible();
});
