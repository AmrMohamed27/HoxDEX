import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="px-8 min-h-screen">
      <Skeleton className="w-full h-[100px] rounded-2xl" />
    </div>
  );
};

export default Loading;
