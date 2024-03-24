import { useMutation } from "@tanstack/react-query";

import { axios } from "@/lib/axios";
import { MutationConfig, queryClient } from "@/lib/react-query";
import storage from "@/utils/storage";

import { Authenticated, Creds, LoginDTO } from "../types/auth";
import { GeneralResponse } from "@/types/api";

type LoginRequest = {
  data: LoginDTO;
};

export async function login({ data }: LoginRequest) {
  const res = await axios.post<GeneralResponse<Authenticated>>(
    "/auth/login",
    data
  );

  return res.data.result!;
}

type UseLoginOption = {
  config?: MutationConfig<typeof login>;
};

export function useLogin({ config }: UseLoginOption = {}) {
  return useMutation({
    mutationFn: login,
    onSuccess: ({ creds, token }) => {
      queryClient.setQueryData(["creds"], creds);
      storage.setToken(token);
    },
    ...config,
  });
}
