import {
  keepPreviousData,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";

import { axios } from "@/lib/axios";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { PaginatedResult } from "@/types/api";

import { Tag, TagQuery } from "../types/tag";

type TagsRequest = {
  params?: TagQuery;
};

export async function getTags({ params }: TagsRequest) {
  const res = await axios.get<PaginatedResult<Tag>>(`/tags`, { params });

  return res.data;
}

type QueryFnType = typeof getTags;

type UseTagsOptions = {
  params?: TagQuery;
  config?: QueryConfig<QueryFnType>;
};

export function useTags({ config, params }: UseTagsOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["tags", params],
    queryFn: () => getTags({ params }),
    placeholderData: keepPreviousData,
  });
}

export function useInfiniteTags({ params }: UseTagsOptions = {}) {
  return useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["tags", params],
    queryFn: ({ pageParam: page = 1 }) =>
      getTags({ params: { ...params, page } }),
    getNextPageParam: ({ metadata }) =>
      metadata.hasNext ? metadata.page + 1 : undefined,
    getPreviousPageParam: ({ metadata }) =>
      metadata.hasPrev ? metadata.page - 1 : undefined,
  });
}
