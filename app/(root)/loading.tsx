import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="p-4 lg:p-8">
      <Skeleton className="w-full rounded-2xl" />
    </div>
  );
};

export default Loading;
