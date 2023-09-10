import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
    Box,
    Flex,
    Icon,
    Menu,
    MenuItem,
    MenuList,
    MenuToggle,
    Text,
    useColorMode,
    useColorStyle,
} from "@tonic-ui/react";
import getDistanceToScreenBorder from "../utils/getDistanceToScreenBorder";
import getRelativePositionOfPoint from "../utils/getRelativePositionOfPoint";
import Avatar from "./Avatar";

const menuItems = [
    {
        icon: "settings",
        name: "Settings",
    },
    {
        icon: "user-team",
        name: "Accounts",
    },
    {
        icon: "lock",
        name: "Privacy control",
    },
    {
        icon: "add",
        name: "Add",
    },
    {
        icon: "add-group",
        name: "Add Group",
    },
    {
        icon: "add-square-plus-o",
        name: "Add Square Plus O",
    },
    {
        icon: "alert",
        name: "Alert",
    },
    {
        icon: "asterisk",
        name: "Asterisk",
    },
    {
        icon: "attach-alert",
        name: "Attach Alert",
    },
    {
        icon: "attach-new",
        name: "Attach New",
    },
];

const MyMenu = () => {
    const [colorMode] = useColorMode();
    const [colorStyle] = useColorStyle({ colorMode });

    const menuRef = useRef(null);
    const [menuPlacement, setMenuPlacement] = useState("bottom-start");
    const [menuMaxHeight, setMenuMaxHeight] = useState(undefined);

    useEffect(() => {
        if (!menuRef.current) return;

        const menuDom = menuRef.current;
        const [distanceToTop, distanceToBottom, distanceToLeft, distanceToRight] = getDistanceToScreenBorder(menuDom);
        const [y, x] = getRelativePositionOfPoint(distanceToTop, distanceToBottom, distanceToLeft, distanceToRight);
        const menuPlacement = `${y === "bottom" ? "top" : "bottom"}-${x === "left" ? "start" : "end"}`;
        const menuMaxHeight = Math.max(distanceToTop, distanceToBottom) - 48;

        setMenuPlacement(menuPlacement);
        setMenuMaxHeight(menuMaxHeight);
    });

    return (
        <div>
            <Menu ref={menuRef} placement={menuPlacement}>
                <MenuToggle>
                    <Avatar
                        data-testid="avatar"
                        backgroundColor={colorStyle.background.secondary}
                        color={colorStyle.color.secondary}
                        _hover={{
                            color: colorStyle.color.primary,
                        }}
                    >
                        <Icon icon="user-team" size="5x" />
                    </Avatar>
                </MenuToggle>
                {createPortal(
                    <MenuList
                        data-testid="menu-list"
                        width="max-content"
                        overflow="auto"
                        maxHeight={menuMaxHeight}
                        zIndex={Number.MAX_SAFE_INTEGER}
                    >
                        <Box>
                            {menuItems.map(({ icon, name }) => (
                                <MenuItem key={name}>
                                    <Flex flex="none" mr="3x">
                                        <Icon icon={icon} />
                                    </Flex>
                                    <Flex flex="auto">
                                        <Text>{name}</Text>
                                    </Flex>
                                </MenuItem>
                            ))}
                        </Box>
                    </MenuList>,
                    document.body
                )}
            </Menu>
        </div>
    );
};

export default MyMenu;
