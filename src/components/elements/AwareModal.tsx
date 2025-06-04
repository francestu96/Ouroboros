import { Modal, ModalOverlay, ModalContent, ModalHeader, HStack, ModalCloseButton, ModalBody, ModalFooter, Button, Text, Link } from "@chakra-ui/react";

const AwareModal = ({ appUrl, isOpen, onClose }: { appUrl: string, isOpen: any, onClose: any }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <HStack>
                        <Text>Investment Risk Disclaimer</Text>
                    </HStack>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody justifyItems="center">
                    <Text>
                        Trading and investing in financial markets involves <b>significant risk</b> and may not be suitable for all investors. <br></br>
                        Past performance <b>is not indicative</b> of future results.<br></br><br></br>
                        <b>Ouroboros</b> is not resonsible for any losses incurred as a result of using the strategies provided on this platform. <br></br>
                        By using this platform, you <b>acknowledge that you understand the risks involved</b> and agree to use the strategies at your own risk.
                    </Text>
                    <Text mt="4" fontSize={"xs"}>
                        Read <Link href="/termsOfService" color="main">Terms of Service</Link> and <Link href="/privacyPolicy" color="main">Privacy Policy</Link> for more information.
                    </Text>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='red' mr={3} onClick={onClose}>
                        <Link href={appUrl} isExternal>
                            I'm aware of the risks
                        </Link>
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default AwareModal;