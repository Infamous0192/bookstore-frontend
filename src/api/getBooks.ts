import {
  keepPreviousData,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";

import { axios } from "@/lib/axios";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { PaginatedResult } from "@/types/api";

import { Book, BookQuery } from "../types/book";

type BooksRequest = {
  params?: BookQuery;
};

export async function getBooks({ params }: BooksRequest) {
  const res = await axios.get<PaginatedResult<Book>>(`/books`, { params });

  return res.data;
}

type QueryFnType = typeof getBooks;

type UseBooksOptions = {
  params?: BookQuery;
  config?: QueryConfig<QueryFnType>;
};

export function useBooks({ config, params }: UseBooksOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["books", params],
    queryFn: () => getBooks({ params }),
    placeholderData: keepPreviousData,
  });
}

export function useInfiniteBooks({ params }: UseBooksOptions = {}) {
  return useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["books", params],
    queryFn: ({ pageParam: page = 1 }) =>
      getBooks({ params: { ...params, page } }),
    getNextPageParam: ({ metadata }) =>
      metadata.hasNext ? metadata.page + 1 : undefined,
    getPreviousPageParam: ({ metadata }) =>
      metadata.hasPrev ? metadata.page - 1 : undefined,
  });
}
