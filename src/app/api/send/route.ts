import axios from 'axios';
import { EmailTemplate } from '../../../components/ui/email-template';
import { Resend } from 'resend';
import { NextRequest,NextResponse } from 'next/server';


const resend = new Resend("re_E298rGcC_3qu5aEQv6pUQ3K3DPkNr9can");

export async function POST(req:any) {
  try {
    const reqbody = await req.json()
    console.log(reqbody)
    const {name,email,message} = reqbody
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['aprathamm@gmail.com'],
      subject: 'Hello world',
      react:EmailTemplate({name:name,email:email,message:message})  as React.ReactElement,
      text:"nothing"
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
