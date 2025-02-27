import { motion } from "motion/react";

const pageVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function PageTransition({ component }: { component: React.ReactNode }) {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
        >
            {component}
        </motion.div>
    );
}
