import EmailTemplate from "../../../components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { mail, name } = await req.json();

    const { data, error } = await resend.emails.send({
      from: `nboarding@resend.dev`,
      to: [mail],
      subject: "Hello Baby Girl",
      react: EmailTemplate({ firstName: name }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
