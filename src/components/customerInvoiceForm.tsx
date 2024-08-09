'use client';

import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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

import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import customerInvoiceSchema from '@/lib/validators/customerInvoiceSchema';
import { Button } from './ui/button';
import { generateInvoice } from '@/actions/generateInvoice';
import { useState } from 'react';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

export default function CustomerInvoiceForm() {
  const [] = useState<string>();
  const form = useForm<z.infer<typeof customerInvoiceSchema>>({
    resolver: zodResolver(customerInvoiceSchema),
    defaultValues: {
      name: '',
      mobile: '',
      model: '',
      complaints: '',
      amount: '',
    },
  });

  const {
    reset,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (values: z.infer<typeof customerInvoiceSchema>) => {
    const data = await generateInvoice(values);
    if (data?.error == 401) {
      toast.error(data?.message, {
        duration: 4000,
        position: 'top-right',
      });
    }
  };

  return (
    <div className='box-border w-full'>
      <Card className={cn('w-full max-w-lg space-y-4 lg:mx-auto lg:max-w-2xl')}>
        <CardHeader className='text-center'>
          <CardTitle className='text-2xl uppercase'>Generate Invoice</CardTitle>
          <CardDescription>Enter Customer Information</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='max-w-sd relative flex w-full flex-col gap-4 overflow-x-hidden lg:max-w-2xl'
          >
            <CardContent>
              <div className='grid gap-4'>
                {/* form step 1 */}
                <div className={cn('space-y-4')}>
                  <div className='grid gap-4 lg:grid-cols-2'>
                    {/* name */}
                    <div className='grid gap-2'>
                      <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Customer Name</FormLabel>
                            <FormControl>
                              <Input placeholder='Kondeti Shivaji' {...field} />
                            </FormControl>
                            <div className='h-1'>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
                    {/*  Mobile Number */}
                    <div className='grid gap-2'>
                      <FormField
                        control={form.control}
                        name='mobile'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mobile Number</FormLabel>
                            <FormControl>
                              <Input placeholder='8788676763' {...field} />
                            </FormControl>
                            <div className='h-1'>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div className='grid gap-4 lg:grid-cols-2'>
                    {/* mobile model */}
                    <div className='grid gap-2'>
                      <FormField
                        control={form.control}
                        name='model'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Make & Mobile</FormLabel>
                            <FormControl>
                              <Input placeholder='Samsung S10+' {...field} />
                            </FormControl>
                            <div className='h-1'>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
                    {/* amount */}
                    <div className='grid gap-2'>
                      <FormField
                        control={form.control}
                        name='amount'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Amount</FormLabel>
                            <FormControl>
                              <Input placeholder='7500' {...field} />
                            </FormControl>
                            <div className='h-1'>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* complaints */}
                  <div className='grid gap-2'>
                    <FormField
                      control={form.control}
                      name='complaints'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Complaints</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder='Display Replacement & Battery Issue'
                              className='resize-y'
                              {...field}
                            />
                          </FormControl>
                          <div className='h-1'>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* form submit button */}
                <div className='mt-2 flex justify-around space-x-6'>
                  <Button
                    className='w-full'
                    type='submit'
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className='mr-2 h-6 w-6 animate-spin' />{' '}
                        <span className='animate-bounce'>Generating...</span>
                      </>
                    ) : (
                      <span>Generate</span>
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </form>
        </Form>
      </Card>
    </div>
  );
}
