'use client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { PasswordInput } from './passwordInput';
import SignInSchema from '@/lib/validators/signInSchema';
import { SignInAction } from '@/actions/signinAction';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

export default function SignInForm() {
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = async (values: z.infer<typeof SignInSchema>) => {
    const response = await SignInAction(values);

    if (!response?.success) {
      toast.error(response?.message, { position: 'top-right', duration: 1500 });
    }
  };

  const {
    formState: { isSubmitting },
  } = form;

  return (
    <div className='box-border py-9 lg:py-24'>
      <Card className='mx-auto max-w-sm lg:max-w-md'>
        <CardHeader>
          <CardTitle className='text-2xl'>Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex w-full max-w-md flex-col gap-4'
          >
            <CardContent>
              <div className='grid gap-6'>
                <div className='grid gap-2'>
                  {/* email */}
                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder='vy@gmail.com' {...field} />
                        </FormControl>
                        <div className='h-2'>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
                <div className='grid gap-2'>
                  {/* password */}
                  <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                      <FormItem>
                        <div className='flex items-center'>
                          <FormLabel>Password</FormLabel>
                          <Link
                            href='#'
                            className='ml-auto inline-block text-sm text-[#0069c2] underline'
                          >
                            Forgot your password?
                          </Link>
                        </div>
                        <FormControl>
                          <div className='flex w-full'>
                            <PasswordInput
                              placeholder='*************'
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <div className='h-2'>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
                <Button type='submit' className='w-full'>
                  {isSubmitting && (
                    <Loader2 className='mr-2 h-5 w-5 animate-spin' />
                  )}
                  <span>Login</span>
                </Button>
              </div>
            </CardContent>
          </form>
        </Form>
      </Card>
    </div>
  );
}
