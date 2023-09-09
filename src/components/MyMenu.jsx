import React from "react";
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
import Avatar from "./Avatar";

const MyMenu = () => {
    const [colorMode] = useColorMode();
    const [colorStyle] = useColorStyle({ colorMode });

    return (
        <Menu>
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
                <MenuList width="max-content">
                    <Box>
                        <MenuItem>
                            <Flex flex="none" mr="3x">
                                <Icon icon="settings" />
                            </Flex>
                            <Flex flex="auto">
                                <Text>Settings</Text>
                            </Flex>
                        </MenuItem>
                        <MenuItem>
                            <Flex flex="none" mr="3x">
                                <Icon icon="user-team" />
                            </Flex>
                            <Flex flex="auto">
                                <Text>Accounts</Text>
                            </Flex>
                        </MenuItem>
                        <MenuItem>
                            <Flex flex="none" mr="3x">
                                <Icon icon="lock" />
                            </Flex>
                            <Flex flex="auto">
                                <Text>Privacy control</Text>
                            </Flex>
                        </MenuItem>
                    </Box>
                </MenuList>
            </FocusLock>
        </Menu>
    );
};

export default MyMenu;
