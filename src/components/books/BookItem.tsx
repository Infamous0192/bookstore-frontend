import Link from "next/link";
import { Book } from "@/types/book";
import { IconBook, IconClock, IconStar } from "@tabler/icons-react";

export const BookItem: React.FC<Book> = (book) => {
  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded shadow border border-slate-200">
      <Link href={`/kelas/${book.id}`}>
        <div className="relative bg-slate-200 w-full aspect-video rounded rounded-b-none overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
            alt="placeholder"
            className="absolute w-full h-full inset-0 object-center object-cover"
          />
        </div>
      </Link>
      <div className="p-4 truncate">
        <Link href={`/kelas/${book.id}`}>
          <h3 className="font-bold hover:underline truncate text-lg capitalize">
            {book.title}
          </h3>
        </Link>

        <div className="flex items-center space-x-3 text-slate-700 mt-1.5 mb-3">
          <div className="flex items-center text-sm space-x-1.5">
            <IconClock className="w-5 h-5" />
            <span className="leading-none font-medium">24 Jam</span>
          </div>
          <div className="flex items-center text-sm space-x-1.5">
            <IconBook className="w-5 h-5" />
            <span className="leading-none font-medium">23 Materi</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1.5">
            <IconStar className="w-6 h-6 text-sunglow-500" />
            <span className="leading-none font-bold">5.0</span>
          </div>

          {book.price > 0 ? (
            <div className="px-3 py-1 bg-green-200 text-green-600 font-medium rounded-full text-sm">
              {book.price}
            </div>
          ) : (
            <div className="px-3 py-1 bg-red-200 text-red-500 font-medium rounded-full text-sm">
              Gratis
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
