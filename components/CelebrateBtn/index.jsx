import React from 'react';
import { Button } from '@nextui-org/react';
import confetti from 'canvas-confetti';

const CustomButton = () => {
    const handleConfetti = () => {
        confetti({ });
    };

    return (
        <Button
         
            disableRipple
            className="
            mt-6
            dark:bg-gray-700  relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
            size="lg"
            onPress={handleConfetti}
        >
            Submit
        </Button>
    );
};

export default CustomButton;