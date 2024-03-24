import { useCreds } from "@/api";
import { AuthContext } from "@/contexts/auth";
import storage from "@/utils/storage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";

type Props = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const queryClient = useQueryClient();
  const credsQuery = useCreds();

  const logoutMutation = useMutation({
    mutationFn: async () => storage.clear(),
    onSuccess: () => {
      queryClient.clear();
    },
  });

  const value = useMemo(
    () => ({
      creds: credsQuery.data ?? null,
      logout: logoutMutation.mutateAsync,
    }),
    [credsQuery, logoutMutation.mutateAsync]
  );

  if (credsQuery.isLoading || logoutMutation.isPending) return null;

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
