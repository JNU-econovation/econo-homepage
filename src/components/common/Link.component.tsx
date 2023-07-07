import URLS from "@/assets/constants/url.ko.json";
import { Link } from "react-router-dom";

const LinkTo = ({
  link,
  className,
  children,
}: {
  link: string;
  className?: string;
  children: React.ReactElement[] | React.ReactElement | string[] | string;
}) => (
  <Link to={URLS[link as keyof typeof URLS].LINK} className={className}>
    {children}
  </Link>
);

export default LinkTo;
