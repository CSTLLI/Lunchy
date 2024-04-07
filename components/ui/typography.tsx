import * as React from "react";
import {cva, type VariantProps} from "class-variance-authority";
import {cn} from "@/lib/utils";

interface TypographyProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof typographyVariants> {
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
}

const typographyVariants = {
    h1: "scroll-m-20 text-6xl mt-4 font-extrabold tracking-tight lg:text-5xl text-primary-color-dark",
    h2: "scroll-m-20 text-3xl mt-4 font-bold tracking-tight lg:text-3xl text-primary-color-dark",
    h3: "text-md font-bold tracking-[2.70px] leading-[22.40px] text-primary-color uppercase",
    h4: "text-lg font-bold text-primary-color-dark",
}

const Typography: React.FC<TypographyProps> =
    ({
         variant = "span",
         className,
         children,
         ...props
     }) => {
        const Component = variant;
        return (
            <Component className={typographyVariants[variant]} {...props}>
                {children}
            </Component>
        );
    };

Typography.displayName = "Typography";

export {Typography, typographyVariants}
