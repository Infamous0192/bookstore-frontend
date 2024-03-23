import { useBooks } from "@/api";
import { BookItem } from "./BookItem";

const BookSkeleton: React.FC = () => (
  <div className="w-full max-w-sm mx-auto bg-white rounded shadow border border-slate-200">
    <div className="block items-center">
      <div className="relative bg-slate-200 w-full aspect-video rounded rounded-b-none overflow-hidden"></div>
      <div className="p-4 truncate">
        <h3 className="w-3/4 h-5 rounded animate-pulse bg-slate-200 mb-4"></h3>

        <div className="flex items-center space-x-3 text-slate-700 mt-1.5 mb-4">
          <div className="w-16 h-4 bg-slate-200 rounded animate-pulse"></div>
          <div className="w-16 h-4 bg-slate-200 rounded animate-pulse"></div>
        </div>

        <div className="flex items-center justify-between">
          <div className="w-14 h-5 bg-slate-200 rounded animate-pulse"></div>
          <div className="w-14 h-5 bg-slate-200 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  </div>
);

export const BookList: React.FC = () => {
  const { data, isLoading, isError } = useBooks();

  if (isLoading || isError)
    return (
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-6">
        <BookSkeleton />
        <BookSkeleton />
        <BookSkeleton />
        <BookSkeleton />
        <BookSkeleton />
        <BookSkeleton />
      </div>
    );

  return (
    <>
      {data?.result.length ? (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-6">
          {data.result.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </div>
      ) : (
        <div className="w-full text-center text-slate-600 mt-8">
          Book not found
        </div>
      )}
    </>
  );
};
