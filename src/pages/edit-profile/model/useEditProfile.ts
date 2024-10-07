import * as yup from 'yup';
import { useAuthStore } from "~/app/stores/useAuthStore";
import { editProfile } from "~/pages/edit-profile/api/editProfileApi";
import type {User} from "~/entities/user/model/user";

export const useEditProfile = () => {
  const { user, setUser, token } = useAuthStore();

  const initValues = user
  const isLoading = ref(false);

  const schema = yup.object({
    about: yup.string(),
    email: yup.string(),
    avatar: yup.mixed().nullable().optional(),
  })

  interface Values {
    email: string;
    about: string;
    avatar: File;
  }

  async function onSubmit(values: Values) {
    isLoading.value = true;
    const formData = new FormData();

    formData.append('email', values.email);
    formData.append('about', values.about);
    formData.append('avatar', values.avatar);

    try {
      const user: User = await editProfile(token, formData);
      setUser(user);

      setTimeout(() => {
        isLoading.value = false;
      }, 1000);
    } catch (error) {
      console.error('Error editing profile:', error);
      isLoading.value = false;
    }
  }



  return {
    onSubmit,
    initValues,
    schema,
    isLoading
  }
}