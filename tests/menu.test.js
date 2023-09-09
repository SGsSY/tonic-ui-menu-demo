import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { TonicProvider } from "@tonic-ui/react";
import MyMenu from "../src/components/MyMenu";

test("測試 Menu 元件是否正確渲染", async () => {
    // 渲染你的Tonic UI元件
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
