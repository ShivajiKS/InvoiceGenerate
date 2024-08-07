import CustomerInvoiceForm from '@/components/customerInvoiceForm';



export default async function Page() {
  return (
    <div className='flex w-full flex-col items-center px-4 py-14'>
      <CustomerInvoiceForm />
    </div>
  );
}
