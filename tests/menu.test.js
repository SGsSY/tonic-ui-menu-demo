import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { TonicProvider } from "@tonic-ui/react";
import MyMenu from "../src/components/MyMenu";

describe("is menu render properly", () => {
    test("show menu list after click on avatar", async () => {
        // render MyMenu component
        const { getByText, getByTestId } = render(
            <TonicProvider>
                <MyMenu />
            </TonicProvider>
        );

        // avatar
        const avatar = getByTestId("avatar");
        expect(avatar).toBeInTheDocument();
        await userEvent.click(avatar);

        // menu items
        const settingsMenuItem = getByText("Settings");
        const accountsMenuItem = getByText("Accounts");
        const privacyControlMenuItem = getByText("Privacy control");
        expect(settingsMenuItem).toBeInTheDocument();
        expect(accountsMenuItem).toBeInTheDocument();
        expect(privacyControlMenuItem).toBeInTheDocument();
    });

    test("menu list is in bounding", async () => {
        // render MyMenu component
        const { getByTestId } = render(
            <TonicProvider>
                <MyMenu />
            </TonicProvider>
        );

        // avatar
        const avatar = getByTestId("avatar");
        expect(avatar).toBeInTheDocument();
        await userEvent.click(avatar);

        // menu list
        const menuList = getByTestId("menu-list");
        const menuListRect = menuList.getBoundingClientRect();
        expect(menuListRect.top).toBeGreaterThanOrEqual(0);
        expect(menuListRect.right).toBeLessThanOrEqual(window.innerWidth);
        expect(menuListRect.bottom).toBeLessThanOrEqual(window.innerHeight);
        expect(menuListRect.left).toBeGreaterThanOrEqual(0);
    });
});
