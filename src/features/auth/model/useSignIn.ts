import { useForm } from 'vee-validate';
import * as yup from 'yup';
import { loginUser } from "~/features/auth/lib/authHelper";
import {useRouter} from "#app";

export const useSignIn = () => {
  const isLoading = ref(false);
  const router = useRouter();

  const { handleSubmit } = useForm({
    validationSchema: yup.object({
      name: yup.string().required(),
      password: yup.string().required().min(6),
    }),
  });

  const onSubmit = handleSubmit(values => {
    isLoading.value = true

    loginUser({
      name: values.name,
      password: values.password,
    }).then(() => {
      isLoading.value = false
      router.push('/profile')
    })
  });


  return {
    onSubmit,
    isLoading
  }
}