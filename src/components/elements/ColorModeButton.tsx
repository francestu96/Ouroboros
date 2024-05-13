import { Button, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const ColorModeButton = ({ size } : { size?: string }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button size={size ? size : "md"} onClick={toggleColorMode}>
      {colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};

export default ColorModeButton;
