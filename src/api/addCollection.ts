import { useMutation } from "@tanstack/react-query";

import { axios } from "@/lib/axios";
import { MutationConfig, queryClient } from "@/lib/react-query";

import { GeneralResponse } from "@/types/api";

type AddCollectionRequest = {
  userId: number | string;
  bookId: number | string;
};

export async function addCollection({ userId, bookId }: AddCollectionRequest) {
  const res = await axios.put<GeneralResponse>(
    `/users/${userId}/book/${bookId}`
  );

  return res.data.result!;
}

type UseAddCollectionOption = {
  config?: MutationConfig<typeof addCollection>;
};

export function useAddCollection({ config }: UseAddCollectionOption = {}) {
  return useMutation({
    mutationFn: addCollection,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["creds"] });
    },
    ...config,
  });
}
