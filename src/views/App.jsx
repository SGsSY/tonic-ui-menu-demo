import React, { useState } from "react";
import {
    Box,
    ButtonBase,
    Flex,
    Icon,
    Menu,
    MenuDivider,
    MenuGroup,
    MenuItem,
    MenuList,
    MenuToggle,
    Space,
    Text,
    useColorMode,
    useColorStyle,
    TonicProvider,
} from "@tonic-ui/react";
import FocusLock from "react-focus-lock";

const Avatar = (props) => (
    <Flex
        p="1x"
        borderRadius="50%"
        alignItems="center"
        justifyContent="center"
        fontSize="xs"
        lineHeight="1"
        {...props}
    />
);

const MyMenu = () => {
    const [colorMode, setColorMode] = useColorMode();
    const [colorStyle] = useColorStyle({ colorMode });

    return (
        <Menu>
            <MenuToggle>
                <Avatar
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

const App = () => {
    return (
        <TonicProvider>
            <MyMenu />
        </TonicProvider>
    );
};

export default App;
