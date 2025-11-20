import { Facebook, Github, Linkedin, Slack, Youtube } from 'lucide-react';
import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}
const socialLink = [
  {
    title: "Youtube",
    href: "https://www.youtube.com/watch?v=PNozCtt-kcA&list=PLKLIBT9QSk-Ec3mg_YfmCV5iIBQUaF3-7",
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    title: "Github",
    href: "https://www.youtube.com/watch?v=PNozCtt-kcA&list=PLKLIBT9QSk-Ec3mg_YfmCV5iIBQUaF3-7",
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: "Linkedin",
    href: "https://www.youtube.com/watch?v=PNozCtt-kcA&list=PLKLIBT9QSk-Ec3mg_YfmCV5iIBQUaF3-7",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: "Facebook",
    href: "https://www.youtube.com/watch?v=PNozCtt-kcA&list=PLKLIBT9QSk-Ec3mg_YfmCV5iIBQUaF3-7",
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    title: "Slack",
    href: "https://www.youtube.com/watch?v=PNozCtt-kcA&list=PLKLIBT9QSk-Ec3mg_YfmCV5iIBQUaF3-7",
    icon: <Slack className="w-5 h-5" />,
  },
];

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {socialLink?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                key={item?.title}
                target="_blank"
                rel="noopener noreferrer"
                href={item?.href}
                className={cn(
                  "p-2 border rounded-full hover:text-shadow-pink-400 hover:border-b-shadow-pink-400 hoverEffect",
                  iconClassName
                )}
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "bg-shadow-pink-400 text-darkColor font-semibold",
                tooltipClassName
              )}
            >
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;