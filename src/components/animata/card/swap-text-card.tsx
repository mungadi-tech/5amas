import { Button, Heading } from "@radix-ui/themes";
import { SwapText } from "../text/swap-text";
import { Link } from "react-router-dom";

interface FlipTextCardProps {
  initialText: string;
  finalText: string;
  title: string;
  link: string;
}

export function SwapTextCard({
  initialText,
  finalText,
  title,
  link,
}: FlipTextCardProps) {
  return (
    <div className="group flex min-h-52 w-full flex-col justify-between rounded-3xl bg-[var(--accent-3)] p-6 md:max-w-[500px]">
      <Heading className="mb-2 uppercase text-[var(--accent-11)]">
        {title}
      </Heading>
      <div className="flex flex-col justify-between md:min-w-72">
        <div className="md:hidden">
          <div className="text-lg font-semibold text-black">{initialText}</div>
          <div className="text-sm font-medium text-gray-500">{finalText}</div>
        </div>
        <div className="py-2 md:hidden">
          <Link to={link}>
            <Button>View More...</Button>
          </Link>
        </div>

        <SwapText
          link={link}
          initialText={initialText}
          finalText={finalText}
          disableClick
          className="-mb-7 hidden min-h-24 transition-all duration-200 group-hover:mb-0 md:flex md:flex-col"
          initialTextClassName="text-lg group-hover:opacity-0 h-full duration-200 font-semibold text-black"
          finalTextClassName="text-sm h-full duration-200 font-medium text-gray-500"
        />
      </div>
    </div>
  );
}
