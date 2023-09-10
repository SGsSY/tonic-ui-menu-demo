const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:8000");
});

test("menu avatar should be visible", async ({ page }) => {
    const avatar = await page.getByTestId("avatar");
    await expect(avatar).toBeVisible();
});

test("menu list should be hidden before be clicked", async ({ page }) => {
    const menuList = await page.getByTestId("menu-list");
    await expect(menuList).not.toBeVisible();
});

test("menu avatar should be clickable and show menu list", async ({ page }) => {
    const avatar = await page.getByTestId("avatar");
    await avatar.click();
    const menuList = await page.getByTestId("menu-list");
    await expect(menuList).toBeVisible();
});

test("menu list item should be clickable and hidden menu list", async ({ page }) => {
    const avatar = await page.getByTestId("avatar");
    await avatar.click();
    const menuList = await page.getByTestId("menu-list");
    await expect(menuList).toBeVisible();
    const menuListItem = await page.getByText("Settings");
    await menuListItem.click();
    await expect(menuList).not.toBeVisible();
});
