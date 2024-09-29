import { registerUser } from "~/features/auth/lib/authHelper";
import {useForm} from "vee-validate";
import * as yup from "yup";
import { useRouter } from "#imports";

export const useSingUp = () => {
  const isLoading = ref(false)
  const router = useRouter()

  const { handleSubmit } = useForm({
    validationSchema: yup.object({
      name: yup.string().required(),
      email: yup.string().required().email(),
      password: yup.string().required().min(6),
      passwordConfirm: yup
        .string()
        .required()
        .min(6)
        .oneOf([yup.ref('password')]),
    }),
  });

  const onSubmit = handleSubmit(values => {
    isLoading.value = true
    registerUser({
      username: values.name,
      email: values.email,
      password: values.password,
    }).then(() => {
      isLoading.value = false
      router.push('/sign-in')
    })
  });

  return {
    onSubmit,
    isLoading
  }
}