'use client';
import React, {useState} from 'react';
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

const formSchema = zod.object({
  bio: zod
    .string({
      required_error:
        'a short biography is needed in order to generate a cover letter...',
    })
    .min(100, 'Too short make - should be a minimum of a 100 characters'),
});

export default function ProfileForm() {
  const form = useForm<zod.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bio: '',
    },
  });

  const handleSubmit = () => {};
  return (
    <div className='flex justify-center'>
      <Form {...form}>
        <form
          className='max-w-md w-full flex flex-col gap-4'
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <FormField
            control={form.control}
            name='bio'
            render={({field}) => {
              return (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='a little biography abou your experience and skills...'
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
  );
}
