export default function LoadingPostSkeleton() {
  return (
    <div role="status" className="w-full animate-pulse">
      <div className="h-4 rounded-full bg-gray-700 w-5/6 mb-4"></div>
      <div className="h-4 rounded-full bg-gray-700 w-3/4 mb-4"></div>
      <div className="h-4 rounded-full bg-gray-700 w-2/3 mb-4"></div>
      <div className="h-4 rounded-full bg-gray-700 w-1/2 mb-4"></div>
      <div className="h-4 rounded-full bg-gray-700 w-1/4 mb-4"></div>
      <div className="h-4 rounded-full bg-gray-700 w-1/4 mb-4"></div>
      <div className="h-4 rounded-full bg-gray-700 w-1/2 mb-4"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
