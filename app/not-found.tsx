import { Button } from "@/components/ui/button";
import {Link} from "react-transition-progress/next";
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl xl:text-6xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-theme-gray">
        Oops! The page you&apos;re looking for doesn&apos;t exist (yet).
      </p>
      <Link href="/" passHref>
        <Button className="mt-6 bg-theme-blue text-white rounded-lg hover:bg-theme-blue/40">
          Go back home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
