import * as z from "zod";

const InvoiceGenearteSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  phoneNumber: z.string().min(2),
  mobileModel: z.string().min(2),
  repairType: z.string().min(2),
  amount: z.string().min(2),
  warranty: z.string().min(2),
  discount: z.string().min(2),
});

export default InvoiceGenearteSchema;
