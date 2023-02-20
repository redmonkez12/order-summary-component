import clxs from "clsx";

export enum ButtonVariant {
    TRANSPARENT = "TRANSPARENT",
    PRIMARY = "PRIMARY",
}

type Props = {
    label: string;
    variant?: string;
};

export function Button({ label, variant = ButtonVariant.PRIMARY }: Props) {
    return (
        <button
            className={
                clxs("border-none rounded-xl py-4 w-full font text-[15px] h-[50px] font-black",
                    {
                        "bg-none": variant === ButtonVariant.TRANSPARENT,
                        "hover:text-hoverBlue": variant === ButtonVariant.TRANSPARENT,
                        "text-grey": variant === ButtonVariant.TRANSPARENT,
                        "bg-primary": variant === ButtonVariant.PRIMARY,
                        "text-white": variant === ButtonVariant.PRIMARY,
                        "box-shadow": variant === ButtonVariant.PRIMARY,
                    }
                )
            }>{label}</button>
    );
}
