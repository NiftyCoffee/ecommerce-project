import { Argon2id } from 'oslo/password';
import { cookies } from 'next/headers';
import { lucia, validateRequest } from '@/lib/auth';
import { redirect } from 'next/navigation';
import userModel from '@/models/user';
import dbConnect from '@/db/mongoose';
 
export default async function Page() {
  const { user } = await validateRequest();
  if (user) {
    return redirect('/');
  }
  return (
    <form action={signup}>
        <label htmlFor="username">Username</label>
        <input name="username" id="username" />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <br />
        <button>Continue</button>
    </form>
  )
}
 
async function signup(_: any, formData: FormData) {
  'use server';
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;

  const bcrypt = require('bcrypt');
 
  const hashedPassword = await bcrypt.hash(password);
 
  try {
    await dbConnect();
    const user = await userModel.create({
      username: username,
      password: hashedPassword,
    });
 
    const session = await lucia.createSession(user._id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
  } catch (e) {
    console.log('error', e);
    return {
      error: 'An unknown error occurred',
    };
  }
  return redirect('/');
}