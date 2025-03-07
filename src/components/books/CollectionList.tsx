import { useRemoveCollection, useInfiniteBooks } from "@/api";
import { Book, BookQuery } from "@/types/book";
import { useAuth } from "@/hooks/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { Button } from "../elements";
import { useInView } from "react-intersection-observer";

const CollectionSkeleton: React.FC = () => (
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

const CollectionItem: React.FC<Book> = (book) => {
  const { mutate } = useRemoveCollection();
  const { creds } = useAuth();
  const router = useRouter();

  function handleRemove(bookId: number) {
    return () => {
      if (!creds) return router.replace("/auth/login");

      mutate(
        { userId: creds?.id, bookId },
        {
          onSuccess: () => {
            toast.success("Book removed to collection");
          },
          onError: ({ response }) => {
            toast.error(response?.data.message);
          },
        }
      );
    };
  }

  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded shadow border border-slate-200">
      <div className="relative bg-slate-200 w-full h-64 rounded rounded-b-none overflow-hidden">
        <img
          src={book.thumbnail.path}
          alt="placeholder"
          className="absolute w-full h-full inset-0 object-center object-cover"
        />
      </div>
      <div className="p-4 truncate">
        <div className="flex space-x-2 overflow-auto">
          {book.tags.map((tag) => (
            <div
              key={tag.id}
              className="bg-sunglow-400 text-white font-bold px-2 py-0.5 text-xs rounded-full"
            >
              {tag.name}
            </div>
          ))}
        </div>

        <h3 className="font-bold hover:underline truncate text-lg capitalize">
          {book.title}
        </h3>

        <div className="text-sunglow-500">{book.price} Point</div>

        <div>
          <Button
            color="secondary"
            className="w-full mt-2"
            onClick={handleRemove(book.id)}
          >
            Refund
          </Button>
        </div>
      </div>
    </div>
  );
};

type Props = {
  params?: BookQuery;
};

export const CollectionList: React.FC<Props> = ({ params }) => {
  const { ref, inView } = useInView();
  const { data, isFetching, hasNextPage, fetchNextPage } = useInfiniteBooks({
    params: { limit: 8, ...params },
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  const books =
    data?.pages.reduce(
      (prev, { result }) => [...prev, ...result],
      [] as Book[]
    ) ?? [];

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6">
        {books.map((book) => (
          <CollectionItem key={book.id} {...book} />
        ))}
      </div>

      {!isFetching && books.length == 0 && (
        <div className="w-full text-center text-slate-600 mt-8">
          Book not found
        </div>
      )}

      {isFetching ? (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6">
          <CollectionSkeleton />
          <CollectionSkeleton />
          <CollectionSkeleton />
          <CollectionSkeleton />
        </div>
      ) : (
        hasNextPage && (
          <div ref={ref} className="text-center">
            Loading...
          </div>
        )
      )}
    </>
  );
};
