import { test, expect } from "@playwright/test";

test("validate JSON editor error", async ({ page }) => {
  await page.goto("http://localhost:3000");
  const editor = await page.locator("textarea");
  await editor.fill("{ invalid JSON");
  await expect(page.locator("text=Invalid JSON format")).toBeVisible();
});

test("validate form submission", async ({ page }) => {
  await page.goto("http://localhost:3000");
  const editor = await page.locator("textarea");
  await editor.fill(`{
    "fields": [
      { "label": "Name", "name": "name", "type": "text", "required": true },
      { "label": "Email", "name": "email", "type": "email" }
    ]
  }`);
  await page.locator("text=Submit").click();
  await expect(page.locator("text=Form submitted successfully!")).toBeVisible();
});
