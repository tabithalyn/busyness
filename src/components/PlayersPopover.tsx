import { Popover, PopoverHandler, PopoverContent, Avatar, Typography, Button } from "@material-tailwind/react";
import { motion as m } from "framer-motion";

type PlayersType = {
  name: string;
  avatar: string;
  description: string;
  country: string;
  variants: {
    hidden: {
      opacity: number;
      x: string;
    },
    visible: {
      opacity: number;
      x: string;
      transition: {
        delayChildren: number;
        staggerChildren: number;
        duration: number;
      }
    }
  }
}

const PlayersPopover = ({
  name, avatar, description, country, variants
}:PlayersType) => {
  return (
    <>
      <m.div variants={variants} className="w-[22%] border rounded-xl flex justify-center flex-wrap p-5 bg-gray-100">
        <img src={avatar} className="rounded-full w-36 h-36" />
        <div className="w-full flex flex-wrap justify-center p-5">
          <span className="w-full p-2 text-xl font-bold text-center">{name}</span>
          <Popover
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
            placement="top"
            dismiss={{
              enabled: true
            }}
          >
            <PopoverHandler>
              <Button>More Info</Button>
            </PopoverHandler>
            <PopoverContent className="z-50 max-w-[21%]">
            <div className="mb-2 flex items-center justify-between gap-4 p-5">
              <Avatar
                className="w-1/4"
                variant="circular"
                src={avatar}
                alt={name}
              />
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-2 flex items-center gap-2 font-medium"
              >
                <span>{name}</span>
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="font-normal text-blue-gray-500 pb-2"
            >
              {description}
            </Typography>
            <div className="mt-6 flex items-center gap-8 border-t border-blue-gray-50 py-5 px-3">
              <Typography
                variant="small"
                color="gray"
                className="flex items-center gap-2 text-sm font-normal text-blue-gray-500"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM2.332 6.027C2.70329 4.96372 3.36579 4.0261 4.244 3.321C4.512 3.73 4.974 4 5.5 4C5.89782 4 6.27936 4.15804 6.56066 4.43934C6.84196 4.72064 7 5.10218 7 5.5V6C7 6.53043 7.21071 7.03914 7.58579 7.41421C7.96086 7.78929 8.46957 8 9 8C9.53043 8 10.0391 7.78929 10.4142 7.41421C10.7893 7.03914 11 6.53043 11 6C10.9998 5.55242 11.1498 5.11773 11.4259 4.76547C11.702 4.41321 12.0883 4.16375 12.523 4.057C13.4773 5.14867 14.0022 6.55002 14 8C14 8.34 13.972 8.675 13.917 9H13C12.4696 9 11.9609 9.21071 11.5858 9.58579C11.2107 9.96086 11 10.4696 11 11V13.197C10.0883 13.7245 9.05331 14.0015 8 14V12C8 11.4696 7.78929 10.9609 7.41421 10.5858C7.03914 10.2107 6.53043 10 6 10C5.46957 10 4.96086 9.78929 4.58579 9.41421C4.21071 9.03914 4 8.53043 4 8C4.00018 7.527 3.83271 7.06924 3.52733 6.70803C3.22195 6.34681 2.79844 6.10552 2.332 6.027Z"
                    fill="#90A4AE"
                  />
                </svg>
                {country}
              </Typography>
              <Button size="sm">Follow</Button>
            </div>
            </PopoverContent>
          </Popover>
          </div>
        </m.div>
    </>
  );
}
 
export default PlayersPopover;