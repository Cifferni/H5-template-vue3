import { useRouter, useRoute } from 'vue-router';
function userRouter() {
  const router = useRouter();
  const route = useRoute();
  return {
    router,
    route
  };
}
export default userRouter;
