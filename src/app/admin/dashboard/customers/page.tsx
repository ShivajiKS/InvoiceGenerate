import { createSupabaseServerClient } from '@/lib/supabase/server';
import { columns } from './columns';
import { DataTable } from './data-table';

const data = [
  {
    id: '1f8bfc3d5e2f4a8a9c9d',
    name: 'Shivaji',
    'mobile no': 9876543210,
    'mobile model': 'iPhone 12',
    complaints: 'Battery issue',
    amount: 7500,
  },
  {
    id: '2c7e5d4b9f8e3a6b1d2c',
    name: 'Vaishnavi Rao',
    'mobile no': 8867543210,
    'mobile model': 'Samsung Galaxy S21',
    complaints: 'Screen crack',
    amount: 8200,
  },
  {
    id: '3a5b6d7c8e9f4b1d2e3a',
    name: 'Bindhu',
    'mobile no': 9867543210,
    'mobile model': 'Google Pixel 5',
    complaints: 'Software issue',
    amount: 6700,
  },
  {
    id: '4d6e7f8a9b1c2d3e4f5a',
    name: 'Ravi Teja',
    'mobile no': 9876543211,
    'mobile model': 'OnePlus 9',
    complaints: 'Camera malfunction',
    amount: 5900,
  },
  {
    id: '5b7d8e9f1a2b3c4d5e6a',
    name: 'Srinu',
    'mobile no': 9867543212,
    'mobile model': 'iPhone 11',
    complaints: 'Charging issue',
    amount: 8300,
  },
  {
    id: '6c8f9a1b2d3e4f5g6h7a',
    name: 'Venkateswara Rao',
    'mobile no': 9876543213,
    'mobile model': 'Samsung Galaxy Note 20',
    complaints: 'Overheating',
    amount: 7600,
  },
  {
    id: '7e9a1b2c3d4e5f6g7h8a',
    name: 'Vaishnavi',
    'mobile no': 9867543214,
    'mobile model': 'Huawei P30',
    complaints: 'Touchscreen issue',
    amount: 6800,
  },
  {
    id: '8a1b2c3d4e5f6g7h8i9a',
    name: 'Bindhu Priya',
    'mobile no': 9867543215,
    'mobile model': 'Sony Xperia 1',
    complaints: 'Battery draining fast',
    amount: 7500,
  },
  {
    id: '9b2c3d4e5f6g7h8i9j1a',
    name: 'Ravi Kumar',
    'mobile no': 9876543216,
    'mobile model': 'iPhone XR',
    complaints: 'WiFi connectivity issue',
    amount: 7100,
  },
  {
    id: '0c3d4e5f6g7h8i9j1k2a',
    name: 'Shivani',
    'mobile no': 9867543217,
    'mobile model': 'Google Pixel 4a',
    complaints: 'Bluetooth issue',
    amount: 5200,
  },
  {
    id: '1d4e5f6g7h8i9j1k2l3a',
    name: 'Venkata Ramana',
    'mobile no': 9876543218,
    'mobile model': 'Motorola Edge',
    complaints: 'Speaker issue',
    amount: 6700,
  },
  {
    id: '2e5f6g7h8i9j1k2l3m4a',
    name: 'Madhavi Latha',
    'mobile no': 9876543219,
    'mobile model': 'Nokia 8.3',
    complaints: 'Microphone issue',
    amount: 7300,
  },
  {
    id: '3f6g7h8i9j1k2l3m4n5a',
    name: 'Venkata Rao',
    'mobile no': 9876543220,
    'mobile model': 'LG Velvet',
    complaints: 'Water damage',
    amount: 8500,
  },
  {
    id: '4g7h8i9j1k2l3m4n5o6a',
    name: 'Ravi Shankar',
    'mobile no': 9867543221,
    'mobile model': 'OnePlus 8T',
    complaints: 'Signal issue',
    amount: 6500,
  },
  {
    id: '5h8i9j1k2l3m4n5o6p7a',
    name: 'Sravan Kumar',
    'mobile no': 9876543222,
    'mobile model': 'Xiaomi Mi 11',
    complaints: 'Software crash',
    amount: 6700,
  },
  {
    id: '6i9j1k2l3m4n5o6p7q8a',
    name: 'Manoj Kumar',
    'mobile no': 9867543223,
    'mobile model': 'Samsung Galaxy A52',
    complaints: 'Battery not charging',
    amount: 5200,
  },
  {
    id: '7j1k2l3m4n5o6p7q8r9a',
    name: 'Lavanya',
    'mobile no': 9876543224,
    'mobile model': 'Asus ROG Phone 3',
    complaints: 'Screen flickering',
    amount: 7500,
  },
  {
    id: '8k2l3m4n5o6p7q8r9s1a',
    name: 'Praveen Kumar',
    'mobile no': 9867543225,
    'mobile model': 'Realme X7',
    complaints: 'Microphone not working',
    amount: 5600,
  },
  {
    id: '9l3m4n5o6p7q8r9s1t2a',
    name: 'Ramesh Babu',
    'mobile no': 9876543226,
    'mobile model': 'Oppo Reno 5',
    complaints: 'Camera issue',
    amount: 5900,
  },
  {
    id: '0m4n5o6p7q8r9s1t2u3a',
    name: 'Karthik',
    'mobile no': 9876543227,
    'mobile model': 'Vivo V21',
    complaints: 'Screen broken',
    amount: 5300,
  },
  {
    id: '1n5o6p7q8r9s1t2u3v4a',
    name: 'Anusha',
    'mobile no': 9867543228,
    'mobile model': 'Sony Xperia 5 II',
    complaints: 'Speaker malfunction',
    amount: 6800,
  },
  {
    id: '2o6p7q8r9s1t2u3v4w5a',
    name: 'Sunitha',
    'mobile no': 9876543229,
    'mobile model': 'iPhone SE',
    complaints: 'WiFi issue',
    amount: 7200,
  },
  {
    id: '3p7q8r9s1t2u3v4w5x6a',
    name: 'Nagarjuna',
    'mobile no': 9876543230,
    'mobile model': 'Samsung Galaxy M31',
    complaints: 'Software issue',
    amount: 7500,
  },
  {
    id: '4q8r9s1t2u3v4w5x6y7a',
    name: 'Kiran Kumar',
    'mobile no': 9867543231,
    'mobile model': 'OnePlus Nord',
    complaints: 'Touchscreen not responsive',
    amount: 6900,
  },
  {
    id: '5r9s1t2u3v4w5x6y7z8a',
    name: 'Suresh',
    'mobile no': 9876543232,
    'mobile model': 'Google Pixel 3a',
    complaints: 'Battery issue',
    amount: 6700,
  },
  {
    id: '6s1t2u3v4w5x6y7z8a9a',
    name: 'Harika',
    'mobile no': 9876543233,
    'mobile model': 'Huawei Mate 40',
    complaints: 'Overheating',
    amount: 8500,
  },
  {
    id: '7t2u3v4w5x6y7z8a9b1a',
    name: 'Nagendra',
    'mobile no': 9867543234,
    'mobile model': 'iPhone XS',
    complaints: 'Battery draining fast',
    amount: 7200,
  },
  {
    id: '8u3v4w5x6y7z8a9b1c2a',
    name: 'Mounika',
    'mobile no': 9876543235,
    'mobile model': 'Samsung Galaxy Z Fold 2',
    complaints: 'Software crash',
    amount: 9000,
  },
  {
    id: '9v4w5x6y7z8a9b1c2d3a',
    name: 'Sravanthi',
    'mobile no': 9867543236,
    'mobile model': 'Motorola Razr',
    complaints: 'Touchscreen issue',
    amount: 8300,
  },
  {
    id: '0w5x6y7z8a9b1c2d3e4a',
    name: 'Rohith',
    'mobile no': 9876543237,
    'mobile model': 'LG Wing',
    complaints: 'Screen flickering',
    amount: 6800,
  },
];

export default async function CustomerInvoice() {
  return (
    <div className='container mx-auto max-w-6xl overflow-x-hidden'>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
