'use server';

import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function addToDo(formData: FormData): Promise<void> {
  try {
    await prisma.toDo.create({
      data: {
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        completed: formData.get('completed') === 'on' ? true : false,
      },
    });
  } catch (error: any) {
    console.error(error);
    throw new Error(
      `Failed to add todo. Code: ${error?.code} ${error?.message}`
    );
  } finally {
    revalidatePath('/account/dashboard/marketing');
  }
}
