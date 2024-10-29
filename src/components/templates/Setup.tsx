import { Box, Button, Image, useColorModeValue, Step, StepDescription, StepIcon, StepIndicator, StepNumber, Stepper, StepSeparator, StepStatus, StepTitle, useSteps, Flex, Divider } from '@chakra-ui/react';
import { HyperliquidityDeposit } from 'components/elements/steps/HyperliquidityDeposit';
import { TradingViewAlert } from 'components/elements/steps/TradingViewAlert';
import { CompletedStep } from 'components/elements/steps/CompletetdSteps';
import { AuthKey } from 'components/elements/steps/AuthKey';
import React from 'react';

const Setup = () => {
    const steps = [
        { title: 'First', description: 'Hyperliquid deposit', template: HyperliquidityDeposit },
        { title: 'Second', description: 'Auth Key generation', template: AuthKey },
        { title: 'Third', description: 'TradingView alert', template: TradingViewAlert },
    ];

    const { activeStep, setActiveStep, goToNext, goToPrevious } = useSteps({
        index: 0,
        count: steps.length,
    });
    const isLastStep = activeStep === steps.length - 1;
    const hasCompletedAllSteps = activeStep === steps.length;

    return (
        <Box bgImage="/abstract.png" display="flex">
            <Box justifyItems="center" bgColor={useColorModeValue('gray.700', 'white')} display="grid" borderRadius='lg' boxShadow='20px 20px 50px -20px' p={["1em", "2em", "3em"]} m='auto' my='28' minH="38vh" w={["90%", "75%", "50%"]}>
                <Box mt='-8em' height={'8em'}>
                    <Image alt="" m='auto' h='150' src={useColorModeValue('logo-hero-dark.png', 'logo-hero-light.png')} borderRadius='50%' />
                </Box>
                <Stepper mb="2" width="100%" index={activeStep} color={useColorModeValue('white', 'gray.700')} colorScheme="red" cursor="pointer">
                    {
                        steps.map((step, index) => (
                            <Step key={index} onClick={() => setActiveStep(index)}>
                                <StepIndicator>
                                    <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />}/>
                                </StepIndicator>

                                <Box flexShrink='0'>
                                    <StepTitle>{step.title}</StepTitle>
                                    <StepDescription>{step.description}</StepDescription>
                                </Box>

                                <StepSeparator/>
                            </Step>
                        ))
                    }
                </Stepper>
                <Divider mb="6" background="main" width="95%"/>
                {
                    React.createElement(hasCompletedAllSteps ? CompletedStep : steps[activeStep].template)
                }
                <Flex mt="6" width="100%" justify="flex-end" gap={4}>
                    { hasCompletedAllSteps ? (
                        <Button size="sm" onClick={() => setActiveStep(0)} bg='main' _hover={{ bg: 'gray.700', textColor: 'white' }}>
                            Restart
                        </Button>
                    ) : (
                        <>
                            <Button isDisabled={activeStep === 0} onClick={goToPrevious} size="sm" variant="ghost" bg='main' _hover={{ bg: 'gray.700', textColor: 'white' }}>
                                Prev
                            </Button>
                            <Button size="sm" onClick={goToNext} bg='main' _hover={{ bg: 'gray.700', textColor: 'white' }}>
                                {isLastStep ? "Finish" : "Next"}
                            </Button>
                        </>
                    )}
                </Flex>
            </Box>
        </Box>
    );
};

export default Setup;
