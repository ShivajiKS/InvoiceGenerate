import * as z from 'zod';

const customerInvoiceSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required.' })
    .regex(/^[a-zA-Z\s.]+$/, {
      message: 'Name must be a string.',
    }),
  mobile: z
    .string()
    .length(10, { message: 'Phone number should be 10 digits.' })
    .regex(/^[6-7-8-9]\d{9}$/, {
      message: 'Phone number should start with 6 to 9 and contain only digits.',
    }),
  model: z.string().min(5, { message: 'required..' }),
  complaints: z.string().min(5, { message: 'required..' }),
  amount: z.string().min(3, { message: 'amount is required.' }).regex(/^\d+$/, {
    message: 'Amount should contain only digits.',
  }),
});

export default customerInvoiceSchema;
