import { Box, Center, Spinner } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const router = useRouter();
  const { status } = useSession({ required: true, onUnauthenticated() {
    router.push('/auth');
  }, });

  if (status === "loading") {
    return (
      <Box position={"absolute"} top="30%" left="50%">
        <Spinner size='xl'/>
      </Box>
    )
  }

  return children
}

export default AuthProvider;