import { useState } from "react";
import {
    motion,
    useMotionValue,
    useTransform,
    AnimatePresence
} from "framer-motion";

function Images(props) {
    const [exitX, setExitX] = useState(0);

    const x = useMotionValue(0);
    const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
    const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], {
        clamp: false
    });

    const variantsFrontImage = {
        animate: { scale: 1, y: 0, opacity: 1 },
        exit: (custom) => ({
            x: custom,
            opacity: 0,
            scale: 0.5,
            transition: { duration: 0.2 }
        })
    };
    const variantsBackImage = {
        initial: { scale: 0, y: 105, opacity: 0 },
        animate: { scale: 0.75, y: 30, opacity: 0.5 }
    };

    function handleDragEnd(_, info) {
        if (info.offset.x < -100) {
            setExitX(-250);
            props.setIndex(props.index + 1);
        }
        if (info.offset.x > 100) {
            setExitX(250);
            props.setIndex(props.index + 1);
        }
    }

    return (
        <motion.div
            style={{
                
                width: 150,
                height: 150,
                position: "absolute",
                top: 0,
                x,
                rotate,
                cursor: "grab"
            }}
            whileTap={{ cursor: "grabbing" }}
            // Dragging
            drag={props.drag}
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            onDragEnd={handleDragEnd}
            // Animation
            variants={props.frontImage ? variantsFrontImage : variantsBackImage}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={exitX}
            transition={
                props.frontImage
                    ? { type: "spring", stiffness: 300, damping: 20 }
                    : { scale: { duration: 0.2 }, opacity: { duration: 0.4 } }
            }
        >
            <motion.div
                style={{
                    width: 150,
                    height: 150,
                    backgroundImage: `url(${props.imageUrl})`,  // 设置背景图片
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: 30,
                    scale
                }}
            />
        </motion.div>
    );
}

export default function ImagesContainer() {
    const [index, setIndex] = useState(0);
    const imageUrl = "https://www.nikoand.jp/wp-content/uploads/2024/07/SQ-1-1024x1024.jpg";

    return (
        <div className="flex flex-row justify-center items-center">
          <div className="w-[40px] text-white text-[30px] mr-[30px]">← <p className="text-gray-300 text-[12px]">Drag</p></div>
        <motion.div style={{ width: 150, height: 150, position: "relative" }}>
          
            <AnimatePresence initial={false}>
                <Images key={index + 1} frontImage={false} imageUrl={imageUrl} />
        
                 <Images
                    key={index}
                    frontImage={true}
                    index={index}
                    setIndex={setIndex}
                    drag="x"
                    imageUrl={imageUrl}
                />
        
            </AnimatePresence>
        </motion.div>
         <div className="w-[40px] text-white text-[30px] ml-[30px]">→ <p className="text-gray-300 text-[12px]">Drag</p></div>
         </div>
    );
}
