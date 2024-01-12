import { AppContext } from "apps/vtex/mod.ts";

export interface Props {
  email: string;
  name?: string;
  subject?: string;
  message?: string;
  state?: string;
  city?: string;
  phone?: string;
}

const action = async (
  props: Props,
  _req: Request,
  ctx: AppContext,
): Promise<void> => {
  const { vcsDeprecated } = ctx;
  const form = new FormData();
  const {
    email,
    name = "",
    phone = "",
    subject = "",
    message = "",
    city = "",
    state = "",
  } = props;

  form.append("name", name);
  form.append("email", email);
  form.append("phone", phone);
  form.append("subject", subject);
  form.append("message", message);
  form.append("city", city);
  form.append("state", state);

  await vcsDeprecated["POST /api/dataentities/FC/documents"]({}, {
    body: form,
  });
};

export default action;
