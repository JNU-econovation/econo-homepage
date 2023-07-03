import URLS from "@/assets/strings/url.ko.json";
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
  <Link to={URLS[link as keyof typeof URLS].link} className={className}>
    {children}
  </Link>
);

export default LinkTo;
