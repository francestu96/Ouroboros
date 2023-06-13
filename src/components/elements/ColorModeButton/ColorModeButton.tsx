import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Button, useColorMode } from '@chakra-ui/react';

const ColorModeButton = ({ size } : { size?: string }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button size={size ? size : "sm"} onClick={toggleColorMode}>
      {colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};

export default ColorModeButton;
