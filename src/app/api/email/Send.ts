import type { NextApiRequest, NextApiResponse } from 'next';
import EmailTemplate  from '../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
export async function GET(req: NextApiRequest, res: NextApiResponse)  {
  const { data, error } = await resend.emails.send({
    from: "bu@resend.dev",
    to: 'bikramdhami334@gmail.com',
    subject: 'Hello world',
    react: EmailTemplate(),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json({status:"o",data:data});
};