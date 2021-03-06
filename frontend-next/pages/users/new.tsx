import React, { ReactElement } from "react";
import { useRouter } from "next/dist/client/router";
import UserFormPage from "@/components/ads/UserFormPage";
import { UserForm } from "@/models/forms";
import { postApi } from "@/lib";

const Page = (): ReactElement => {
  const router = useRouter();

  const handleSubmit = async (form: UserForm) => {
    try {
      await postApi("/api/users", form);
      alert("広告を保存しました");
      router.push("/users");
    } catch (e) {
      alert("広告の保存に失敗しました");
      console.error(e);
    }
  };

  return (
    <UserFormPage
      title="ユーザー作成"
      handleSubmit={handleSubmit}
    ></UserFormPage>
  );
};

export default Page;
