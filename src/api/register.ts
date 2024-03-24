import { useMutation } from "@tanstack/react-query";

import { axios } from "@/lib/axios";
import { MutationConfig, queryClient } from "@/lib/react-query";
import storage from "@/utils/storage";

import { Authenticated, RegisterDTO } from "../types/auth";
import { GeneralResponse } from "@/types/api";

type RegisterRequest = {
  data: RegisterDTO;
};

export async function register({ data }: RegisterRequest) {
  const res = await axios.post<GeneralResponse<Authenticated>>(
    "/auth/register",
    data
  );

  return res.data.result!;
}

type UseRegisterOption = {
  config?: MutationConfig<typeof register>;
};

export function useRegister({ config }: UseRegisterOption = {}) {
  return useMutation({
    mutationFn: register,
    onSuccess: ({ creds, token }) => {
      queryClient.setQueryData(["creds"], creds);
      storage.setToken(token);
    },
    ...config,
  });
}
