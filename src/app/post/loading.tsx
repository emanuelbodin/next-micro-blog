import LoadingPostSkeleton from "../../ui/posts/LoadingPost";

export default function Loading() {
  return (
    <div className="flex flex-col gap-4">
      {Array(7)
        .fill(0)
        .map((index) => (
          <LoadingPostSkeleton key={`post-loading-skeleton-${index}`} />
        ))}
    </div>
  );
}
