'use client';
import {useSession} from 'next-auth/react';
import Image from 'next/image';
import {useForm} from 'react-hook-form';
import * as zod from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {Button} from '@/components/ui/button';
import {Textarea} from '@/components/ui/textarea';
import {Input} from '@/components/ui/input';

const formSchema = zod.object({
  url: zod.string().url(),
});

export default function Home() {
  const {data: session, status} = useSession();
  const form = useForm<zod.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: '',
    },
  });

  const handleSubmit = () => {
    console.log(form.getValues());
  };

  return (
    <main className='min-h-screen'>
      <div className='flex justify-center'>
        <Form {...form}>
          <form
            className='max-w-md w-full flex flex-col gap-4'
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <FormField
              control={form.control}
              name='url'
              render={({field}) => {
                return (
                  <FormItem>
                    <FormLabel>Indeed URL</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='the indeed jon post url...'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            ></FormField>
            <Button type='submit' className='w-full'>
              Save
            </Button>
          </form>
        </Form>
      </div>
    </main>
  );
}
