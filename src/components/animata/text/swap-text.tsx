import { useState } from "react";

import { cn } from "../../../lib/utils";
import { Button } from "@radix-ui/themes";
import { Link } from "react-router-dom";
interface SwapTextProps extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * The initial text to display.
   */
  initialText: string;
  link: string;

  /**
   * The final text to display.
   */
  finalText: string;

  /**
   * Whether the component should toggle on hover as well as click.
   */
  supportsHover?: boolean;

  /**
   * The class name for the text.
   */
  textClassName?: string;

  /**
   * The class name for the initial text.
   */
  initialTextClassName?: string;

  /**
   * The class name for the final text.
   */
  finalTextClassName?: string;

  /**
   * Whether to disable the click interaction.
   */
  disableClick?: boolean;
}

export function SwapText({
  initialText,
  finalText,
  className,
  link,
  supportsHover = true,
  textClassName,
  initialTextClassName,
  finalTextClassName,
  disableClick,
  ...props
}: SwapTextProps) {
  const [active, setActive] = useState(false);
  const common = "block transition-all duration-1000 ease-slow";

  const longWord = finalText.length > initialText.length ? finalText : null;

  return (
    <div
      {...props}
      className={cn("relative overflow-hidden text-foreground", className)}
    >
      <div
        className={cn(
          "group cursor-pointer select-none text-3xl font-bold",
          textClassName
        )}
        onClick={() => !disableClick && setActive((current) => !current)}
      >
        <span
          className={cn(common, initialTextClassName, {
            "flex flex-col": true,
            "-translate-y-full": active,
            "group-hover:-translate-y-full": supportsHover,
          })}
        >
          {initialText}
          {
            /* Trick to make sure it can always fit all available words after transition as the second word is set to absolute*/
            Boolean(longWord?.length) && (
              <span className="invisible h-0">{longWord}</span>
            )
          }
        </span>
        <div
          className={cn(
            `${common} absolute top-full flex flex-col gap-4`,
            finalTextClassName,
            {
              "-translate-y-full": active,
              "group-hover:-translate-y-full": supportsHover,
            }
          )}
        >
          {finalText}
          <Link to={link}>
            <Button>View More...</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
