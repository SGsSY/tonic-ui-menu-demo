import React, { useRef } from "react";
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
import FocusLock from "react-focus-lock";
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

    const menuDom = document.getElementById("myMenu");
    const [distanceToTop, distanceToBottom, distanceToLeft, distanceToRight] = getDistanceToScreenBorder(menuDom);
    const [y, x] = getRelativePositionOfPoint(distanceToTop, distanceToBottom, distanceToLeft, distanceToRight);
    const menuPlacement = `${y === "bottom" ? "top" : "bottom"}-${x === "left" ? "end" : "start"}`;
    const menuMaxHeight = Math.max(distanceToTop, distanceToBottom) - 48;

    return (
        <Menu id="myMenu" placement={menuPlacement}>
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
            <FocusLock persistentFocus={true}>
                <MenuList data-testid="menu-list" width="max-content" overflow="auto" maxHeight={menuMaxHeight}>
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
                </MenuList>
            </FocusLock>
        </Menu>
    );
};

export default MyMenu;
