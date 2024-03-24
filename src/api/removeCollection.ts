import { useMutation } from "@tanstack/react-query";

import { axios } from "@/lib/axios";
import { MutationConfig, queryClient } from "@/lib/react-query";

import { GeneralResponse } from "@/types/api";

type RemoveCollectionRequest = {
  userId: number | string;
  bookId: number | string;
};

export async function removeCollection({
  userId,
  bookId,
}: RemoveCollectionRequest) {
  const res = await axios.delete<GeneralResponse>(
    `/users/${userId}/book/${bookId}`
  );

  return res.data.result!;
}

type UseRemoveCollectionOption = {
  config?: MutationConfig<typeof removeCollection>;
};

export function useRemoveCollection({
  config,
}: UseRemoveCollectionOption = {}) {
  return useMutation({
    mutationFn: removeCollection,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["creds"] });
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
    ...config,
  });
}
